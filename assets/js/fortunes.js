
const fortunesList = [
  'People are naturally attracted to you.',
  'You learn from your mistakes... You will learn a lot today.',
  "If you have something good in your life, don't let it go!",
  'What ever your goal is in life, embrace it, visualize it, and it will be yours.',
  'Your shoes will make you happy today.',
  'You cannot love life until you live the life you love.',
  'Be on the lookout for coming events; They cast their shadows beforehand.',
  'Land is always on the mind of a flying bird.',
  'Meeting adversity well is the source of your strength.',
  'A dream you have will come true.',
  'Our deeds determine us, as much as we determine our deeds.',
  "Never give up. You're not a failure if you don't give up.",
  'You will become great if you believe in yourself.',
  'There is no greater pleasure than seeing your loved ones prosper.',
  'The greatest love is self-love.',
  'You already know the answer to the questions lingering inside your head.',
  'It is now, and in this world, that we must live.',
  'You must try, or hate yourself for not trying.',
  'You can make your own happiness.',
  'The greatest risk is not taking one.',
  'Adversity is the parent of virtue.',
  'Serious trouble will bypass you.',
  'Now is the time to try something new.',
  'If you feel you are right, stand firmly by your convictions.',
  'If winter comes, can spring be far behind?',
  'You are very talented in many ways.',
  'A stranger is a friend you have not spoken to yet.',
  'A new voyage will fill your life with untold memories.',
  'Your ability for accomplishment will follow with success.',
  'Nothing astonishes one so much as common sense and plain dealing.',
  "Its amazing how much good you can do if you don't care who gets the credit.",
  'Everyone agrees. You are the best.',
  'Life consists not in holding good cards, but in playing those you hold well.',
  "Jealousy doesn't open doors, it closes them.",
  'When fear hurts you, conquer it and defeat it!',
  'Let the deeds speak.',
  'The man on the top of the mountain did not fall there.',
  'You will conquer obstacles to achieve success.',
  'Joys are often the shadows, cast by sorrows.',
  'Fortune favors the brave.'
]

const getFortune = function () { // eslint-disable-line no-unused-vars
    return fortunesList[Math.floor(Math.random() * fortunesList.length)]
}
