import Head from "next/head"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Container } from "@/components/Container"

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheers.li - Privacy</title>
      </Head>
      <Header />
      <main>
        <Container className="flex flex-col gap-4 my-4">
          <h1 className="text-2xl font-bold">Privacy Notice</h1>
          <p className="text-gray-500 text-sm">Last updated November 7, 2022</p>


          <p>This privacy notice for Cheers.li (`&apos;Company`&apos;, `&apos;we`&apos;, `&apos;us`&apos;, or `&apos;our`&apos;, ), describes how and why we might collect, store, use, and/or share ( `&apos;process`&apos;) your information when you use our services (`&apos;Services`&apos;), such as when you:</p>

          <ul className="list-disc px-5">
            <li>Download and use our mobile application (Cheers.li) , or any other application of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>.</p>

          <h2 className="text-xl font-bold">Summary of Key Points</h2>

          <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>

          <ul className="list-disc px-5">
            <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Cheers.li and the Services, the choices you make, and the products and features you use.</li>
            <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
            <li><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</li>
            <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</li>
            <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
            <li><strong>How do we keep your information safe?</strong> We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</li>
            <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
            <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
          </ul>



          <h2 className="text-xl font-bold" id="toc">Table of Content</h2>


          <ul className="list-disc px-5">
            <li><a className="text-sky-700 underline" href="#collect">1. What information do we collect?</a></li>
            <li><a className="text-sky-700 underline" href="#process">2. How do we process your information?</a></li>
            <li><a className="text-sky-700 underline" href="#legal-bases">3. What legal bases do we rely on to process your personal information?</a></li>
            <li><a className="text-sky-700 underline" href="#share-personal">4. When and with whom do we share your personal information?</a></li>
            <li><a className="text-sky-700 underline" href="#social-logins">5. How do we handle your social logins?</a></li>
            <li><a className="text-sky-700 underline" href="#time">6. How long do we keep your information?</a></li>
            <li><a className="text-sky-700 underline" href="#safe">7. How do we keep your information safe?</a></li>
            <li><a className="text-sky-700 underline" href="#minors">8. Do we collect information from minors?</a></li>
            <li><a className="text-sky-700 underline" href="#rights">9. What are your privacy rights?</a></li>
            <li><a className="text-sky-700 underline" href="#do-not-track">10. Controls for do-not-track features</a></li>
            <li><a className="text-sky-700 underline" href="#california">11. Do California residents have specific privacy rights?</a></li>
            <li><a className="text-sky-700 underline" href="#update">12. Do we make updates to this notice?</a></li>
            <li><a className="text-sky-700 underline" href="#contact">13. How can you contact us about this notice?</a></li>
            <li><a className="text-sky-700 underline" href="#review">14. How can you review, update or delete the data we collect from you?</a></li>
          </ul>

          <h2 className="text-xl font-bold" id="collect">1. What information do we collect?</h2>

          <h3 className="text-lg font-bold">Personal information you disclose to us</h3>

          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

          <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>

          <ul className="list-disc px-5">
            <li>Email addresses</li>
            <li>Usernames</li>
            <li>Passwords</li>
          </ul>

          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p><strong>Social Media Login Data.</strong>  We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called `&apos;How do we handle your social logins?`&apos; below.</p>

          <p><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>

          <ul className="list-disc px-5">
            <li>Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device`&apos;s settings.</li>
            <li>Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device`&apos;s camera, and other features. If you wish to change our access or permissions, you may do so in your device`&apos;s settings.</li>
            <li>Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device`&apos;s settings.</li>
          </ul>

          <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>


          <h3 className="text-lg font-bold">Information automatically collected</h3>
          <p><strong>In Short: </strong>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

          <p>The information we collect includes:</p>
          <ul className="list-disc px-5">
            <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
            <li>Location Data. We collect location data such as information about your device`&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
          </ul>

          <h2 className="text-xl font-bold" id="process">2. How do we process your information?</h2>
          <p><strong>In Short: </strong>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul className="list-disc px-5">
            <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
            <li>To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
            <li>To save or protect an individual`&apos;s vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
          </ul>


          <h2 className="text-xl font-bold" id="legal-bases">3. What legal bases do we rely on to process your personal information?</h2>
          <p><strong>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</strong></p>


          <p><i>If you are located in the EU or UK, this section applies to you.</i></p>
          <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
          <ul className="list-disc px-5">
            <li>Consent. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more.</li>
            <li>Performance of a Contract. We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
            <li>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>


          <p><i>If you are located in Canada, this section applies to you.</i></p>
          <p>We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time.</p>
          <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>


          <ul className="list-disc px-5">
            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
            <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
          </ul>


          <h2 className="text-xl font-bold" id="share-personal">4. When and with whom do we share your personal information?</h2>
          <p><strong>In Short: </strong>We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p>We may need to share your personal information in the following situations:</p>

          <ul className="list-disc px-5">
            <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li>Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.</li>
          </ul>

          <h2 className="text-xl font-bold" id="social-logins">5. How do we handle your social logins?</h2>
          <p><strong>In Short: </strong>If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</p>

          <p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
          <p>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

          <h2 className="text-xl font-bold" id="time">6. How long do we keep your information?</h2>
          <p><strong>In Short: </strong>We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>

          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user`&apos;s account .</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <h2 className="text-xl font-bold" id="safe">7. How do we keep your information safe?</h2>
          <p><strong>In Short: We aim to protect your personal information through a system of organisational and technical security measures.</strong></p>

          <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

          <h2 className="text-xl font-bold" id="minors">8. Do we collect information from minors?</h2>
          <p><strong>In Short: We do not knowingly collect data from or market to children under 18 years of age.</strong></p>

          <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>.</p>

          <h2 className="text-xl font-bold" id="rights">9. What are your privacy rights?</h2>
          <p><strong>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</strong></p>

          <p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section `&apos;How can you contact us about this notice`&apos; below.</p>

          <p>We will consider and act upon any request in accordance with applicable data protection laws. If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a className="text-sky-700 underline" href="https://ec.europa.eu/newsroom/article29/items/612080">https://ec.europa.eu/newsroom/article29/items/612080</a>.</p>

          <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a className="text-sky-700 underline" href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.</p>

          <p>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section `&apos;How can you contact us about this notice?`&apos; below.</p>

          <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>


          <h3 className="text-lg font-bold">Account Information</h3>
          <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>

          <ul className="list-disc px-5">
            <li>Log in to your account settings and update your user account.</li>
          </ul>
          <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
          <p>If you have questions or comments about your privacy rights, you may email us at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>.</p>

          <h2 className="text-xl font-bold" id="do-not-track">10. Controls for do-not-track features</h2>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (`&apos;DNT`&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

          <h2 className="text-xl font-bold" id="california">11. Do California residents have specific privacy rights?</h2>
          <p><strong>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</strong></p>

          <p>California Civil Code Section 1798.83, also known as the `&apos;Shine The Light`&apos; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
          <p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>

          <h3 className="text-lg font-bold">CCPA Privacy Notice</h3>

          <p>The California Code of Regulations defines a `&apos;resident`&apos; as:</p>
          <ul className="px-5 list-decimal">
            <li>every individual who is in the State of California for other than a temporary or transitory purpose and</li>
            <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
          </ul>

          <p>All other individuals are defined as `&apos;non-residents`&apos;.</p>
          <p>If this definition of `&apos;resident`&apos; applies to you, we must adhere to certain rights and obligations regarding your personal information.</p>

          <p><strong>What categories of personal information do we collect?</strong></p>
          <p>We have collected the following categories of personal information in the past twelve (12) months:</p>


          <table className="table">
            <thead>
              <tr>
                <th className="p-2 border text-left">Category</th>
                <th className="p-2 text-left">Examples</th>
                <th className="p-2 text-left">Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">A. Identifiers</td>
                <td className="p-2 border">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                <td className="p-2 border">YES</td>
              </tr>
              <tr>
                <td className="p-2 border">B. Personal information categories listed in the California Customer Records statute</td>
                <td className="p-2 border">Name, contact information, education, employment, employment history, and financial information</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">C. Protected classification characteristics under California or federal law</td>
                <td className="p-2 border">Gender and date of birth</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">D. Commercial information</td>
                <td className="p-2 border">Transaction information, purchase history, financial details, and payment information</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">E. Biometric information</td>
                <td className="p-2 border">Fingerprints and voiceprints</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">F. Internet or other similar network activity</td>
                <td className="p-2 border">Browsing history, search history, online behaviour , interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">G. Geolocation data</td>
                <td className="p-2 border">Device location</td>
                <td className="p-2 border">YES</td>
              </tr>
              <tr>
                <td className="p-2 border">H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td className="p-2 border">Images and audio, video or call recordings created in connection with our business activities</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">I. Professional or employment-related information</td>
                <td className="p-2 border">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">J. Education Information</td>
                <td className="p-2 border">Student records and directory information</td>
                <td className="p-2 border">NO</td>
              </tr>
              <tr>
                <td className="p-2 border">K. Inferences drawn from other personal information</td>
                <td className="p-2 border">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                <td className="p-2 border">NO</td>
              </tr>
            </tbody>
          </table>

          <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>


          <ul className="list-disc px-5">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>

          <p><strong>How do we use and share your personal information?</strong></p>
          <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
          <p>You may contact us by email at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>, or by referring to the contact details at the bottom of this document.</p>
          <p>If you are using an authorised agent to exercise your right to opt out we may deny a request if the authorised agent does not submit proof that they have been validly authorised to act on your behalf.</p>

          <p><strong>Will your information be shared with anyone else?</strong></p>
          <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
          <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be `&apos;selling`&apos; of your personal information.</p>
          <p>Cheers.li has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Cheers.li will not sell personal information in the future belonging to website visitors, users, and other consumers.</p>

          <p><strong>Your rights with respect to your personal data</strong></p>
          <p>Right to request deletion of the data — Request to delete</p>
          <p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p>

          <p>Right to be informed — Request to know</p>
          <p>Depending on the circumstances, you have a right to know:</p>

          <ul className="list-disc px-5">
            <li>whether we collect and use your personal information;</li>
            <li>the categories of personal information that we collect;</li>
            <li>the purposes for which the collected personal information is used;</li>
            <li>whether we sell your personal information to third parties;</li>
            <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
            <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
            <li>the business or commercial purpose for collecting or selling personal information.</li>
          </ul>

          <p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>

          <p>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</p>
          <p>We will not discriminate against you if you exercise your privacy rights.</p>

          <p>Verification process</p>
          <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>

          <p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>
          <p>Other privacy rights:</p>

          <ul className="list-disc px-5">
            <li>You may object to the processing of your personal information.</li>
            <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li>
            <li>You can designate an authorised agent to make a request under the CCPA on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with the CCPA.</li>
            <li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li>
          </ul>

          <p>To exercise these rights, you can contact us by email at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>

          <h2 className="text-xl font-bold" id="update">12. Do we make updates to this notice?</h2>
          <p><strong>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</strong></p>

          <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated `&apos;Revised`&apos; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

          <h2 className="text-xl font-bold" id="contact">13. How can you contact us about this notice?</h2>
          <p>If you have questions or comments about this notice, you may email us at <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a>.</p>

          <h2 className="text-xl font-bold" id="review">14. How can you review, update or delete the data we collect from you?</h2>
          <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by email: <a className="text-sky-700 underline" href="mailto:info@cheers.li">info@cheers.li</a></p>

        </Container>
      </main>
      <Footer />
    </>
  )
}
