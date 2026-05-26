import { Resend } from 'resend'

const TO_EMAIL = 'anchoragecollective@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'Anchorage Collective <onboarding@resend.dev>'

const INTEREST_LABELS = {
  psychoeducation: 'Psychoeducation Talks',
  preventive: 'Preventive Holistic Health',
  relationships: 'Mental Health & Relationships',
}

const SUBJECT_LABELS = {
  men: 'Anchored Men',
  professionals: 'Anchored Professionals',
  'mental-health': 'Anchored Mental Health',
  general: 'General Enquiry',
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function buildInterestEmail({ name, email, interests = [], message }) {
  const interestList = interests.length
    ? interests.map((i) => INTEREST_LABELS[i] || i).join(', ')
    : '(none selected)'

  const subject = `New interest registration — ${name}`

  const html = `
    <h2>New interest registration</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Interested in:</strong> ${escapeHtml(interestList)}</p>
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}
    <hr>
    <p style="color:#888;font-size:12px;">Submitted via the Anchored Mental Health interest form.</p>
  `

  const text = [
    'New interest registration',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Interested in: ${interestList}`,
    message ? `\nMessage:\n${message}` : '',
  ].join('\n')

  return { subject, html, text }
}

function buildContactEmail({ name, email, subject: topic, message }) {
  const topicLabel = SUBJECT_LABELS[topic] || 'General Enquiry'
  const subject = `New contact message — ${name} (${topicLabel})`

  const html = `
    <h2>New contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Topic:</strong> ${escapeHtml(topicLabel)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    <hr>
    <p style="color:#888;font-size:12px;">Submitted via the Contact form.</p>
  `

  const text = [
    'New contact message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topicLabel}`,
    '',
    'Message:',
    message,
  ].join('\n')

  return { subject, html, text }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const body = req.body || {}
  const { formType, name, email } = body

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'A valid email is required' })
  }

  let emailContent
  if (formType === 'interest') {
    emailContent = buildInterestEmail(body)
  } else if (formType === 'contact') {
    if (!body.message || typeof body.message !== 'string' || body.message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' })
    }
    emailContent = buildContactEmail(body)
  } else {
    return res.status(400).json({ error: 'Invalid form type' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
