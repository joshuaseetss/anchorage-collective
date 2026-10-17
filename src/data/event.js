export const EVENT = {
  name: 'Setting Anchor',
  start: '2026-09-26T10:00:00+08:00',
  end: '2026-09-26T12:45:00+08:00',
  label: 'Sat, 26 Sep 2026, 10am–12:45pm',
}

export const isEventOver = () => Date.now() > new Date(EVENT.end).getTime()
