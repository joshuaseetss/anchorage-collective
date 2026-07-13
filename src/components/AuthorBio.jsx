import lopeyPhoto from '../assets/lopey.png'

const AUTHOR = {
  name: 'Daniel Lopez',
  role: 'Social Worker & Catalyst for Community Change',
  bio: '',
  linkedin: 'https://www.linkedin.com/in/daniel-lopez-believe/',
  photo: lopeyPhoto,
}

export default function AuthorBio() {
  return (
    <div className="author-bio">
      {AUTHOR.photo && (
        <img className="author-bio-photo" src={AUTHOR.photo} alt={AUTHOR.name} />
      )}
      <div className="author-bio-info">
        <p className="author-bio-name">
          <a href={AUTHOR.linkedin} target="_blank" rel="noopener noreferrer">
            {AUTHOR.name}
          </a>
        </p>
        {AUTHOR.role && <p className="author-bio-role">{AUTHOR.role}</p>}
        {AUTHOR.bio && <p className="author-bio-text">{AUTHOR.bio}</p>}
      </div>
    </div>
  )
}
