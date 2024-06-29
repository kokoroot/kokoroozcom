import { useRouter } from 'next/router';
import { ModalWrap } from '../modal-wrap';
import styles from './terms-modal.module.css';

export const TermsModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  //
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.modalTitle}>Terms of use</div>
        <button className={styles.modalClose} onClick={()=>router.push('/')}>
          Home
        </button>
      </div>
      <div>
        <h4 className={styles.title}>TERMS OF USE OF THE &quot;KOKOROOZ&quot; APP</h4>
        <h3 className={styles.titlePrivacyPolicy}>1. Acceptance of terms</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          1.1. These Terms of Use (hereinafter referred to as the &quot;Terms&quot;) constitute a legally binding agreement between you and the developers of the Kokoruz application (hereinafter referred to as &quot;We&quot;, &quot;Our&quot;, &quot;Developer&quot;) governing your access to and use of the Kokoruz application (hereinafter - &quot;Appendix&quot;).
        </p>
        <p className={styles.textPrivacyPolicy}>
          1.2. Before using the Application, you must carefully read these Terms and accept them in their entirety. By using the App, you agree to these Terms and represent that you have the right to enter into a legally binding agreement with the Developer.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>2. Registration</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          2.1. To use the Application, you need to register and create an account. When registering, you must provide valid and up-to-date information about yourself, including your email address, gender, orientation, date of birth, selfie verification, and nickname.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          2.2. You agree that all information you provide will be stored and processed in accordance with our Privacy Policy. You agree that the information you provide may be used to send you messages, notifications and other communications.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          2.3. You confirm that you are at least 18 years of age at the time of registration. The application is available only to persons who have reached the age of majority.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>3. Privacy</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          3.1. We make every effort to keep your personal data confidential. We do not share your information with third parties, except as required by law or with your consent.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          3.2. You understand and agree that your use of the Application may depend on the collection and processing of certain personal data, such as your geolocation. You consent to the collection, processing and use of such data in accordance with our Privacy Policy.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>4. Creating offers</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          4.1. You can create your own ads on various topics and offer them to other users. When creating an offer, you can specify various settings such as ad category, gender, interests, age, orientation, geolocation, duration of the offer and additional settings.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          4.2. You agree that you are solely responsible for the content and accuracy of your Submission. You agree not to post offensive, obscene, illegal or harmful content.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>
          5. Interaction with other users
        </h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          5.1. Other users can express their interest and like your ads. You have the right to confirm or decline such requests to start chatting.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          5.2. You must treat other users of the Application with courtesy and respect. Abusive, threatening, discriminatory or obscene behavior is not allowed. We reserve the right to terminate access to the App to users who violate these rules of conduct.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>
          6. Disclaimer
        </h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          6.1. You understand and agree that use of the Application is at your own risk. We are not responsible for any loss, damage or consequences arising from the use of the Application.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          6.2. We are not responsible for the actions or behavior of other users of the Application. You are solely responsible for interacting with other users.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>7. Changes to conditions</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          7.1. We may change these Terms from time to time. Please review these Terms periodically for changes. Your continued use of the App after the Terms are amended will be deemed your acceptance of the amended Terms.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>8. Final provisions</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          8.1. These Terms are governed by and construed in accordance with law.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          8.2. If any provision of these Terms is held by a court to be invalid or unenforceable, this will not affect the remainder of the Terms, which will remain in full force and effect.
        </p>{' '}
      </div>
    </div>
  );
};
