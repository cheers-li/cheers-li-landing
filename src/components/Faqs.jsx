import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Who can see my sessions?',
      answer: 'Only your friends can see your sessions. If you do not have any friends yet in the app go to the friends page and send them a friendship request.',
    },
    {
      question: 'For what is the location permission required?',
      answer: 'We save your location inside a session to let your friends know where you are. If you do not wish to share your location with your friends you can always choose to hide it when creating a session.',
    },
    {
      question: 'Can i plan a session in advance?',
      answer: 'At this time it is not possible to plan sessions in advance. This feature will come soon so watch out for our release notes on the app store.',
    },
  ],
  [
    {
      question: 'Why can’t I add any friends?',
      answer: 'Try to log out and close the app before trying again. If the issue persists do not hesitate to contact us.',
    },
    {
      question: 'Who build Cheers.li?',
      answer: 'We are a group of drinking enthusiasts that want to help others to socialize better and keep in touch with their friends.',
    },
    {
      question: 'Aren’t there other apps that do exactly the same?',
      answer: 'Yes, we are aware that there are other apps that provide similar features to cheers.li but we find that none of these apps can really deliver on the features we find important.',
    },
  ],
  [
    {
      question: 'I have a feature request, what can I do?',
      answer: 'Reach out to us as soon as possible! We are always happy to get feedback from our users and receive new ideas.',
    },
    {
      question: 'On which platforms can I use the app?',
      answer: 'The app is developed to work on both IOS and Android. Go to the app store to see the listing and download the app.',
    },
    {
      question: 'What data does cheers.li collect?',
      answer: 'We do not collect any other personal data then your email address and we do not share these with any third party. In the privacy statement you will find out more about data exactly we collect.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@cheers.li"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
