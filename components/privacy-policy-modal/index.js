import { useRouter } from 'next/router';
import { ModalWrap } from '../modal-wrap';
import styles from './privacy-policy-modal.module.css';

export const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  return (
      <div className={styles.privacyPolicyWrap}>
        <div className={styles.header}>
          <div className={styles.modalTitle}>Privacy Policy</div>
          <button className={styles.modalClose} onClick={()=>router.push('/')}>
            Home
          </button>
        </div>
        <div>
          <h3 className={styles.titlePrivacyPolicy}>Part 1:</h3>{' '}
          <p className={styles.subtitlePrivacyPolicy}>
            User rights and data control
          </p>
          <p className={styles.textPrivacyPolicy}>
            a. Access to personal data: Users have the right to request access to their personal data that we hold. You can make a request by contacting our support team using the contact information provided at the end of this clause.
          </p>
          <p className={styles.textPrivacyPolicy}>
            b. Correcting and updating data: We make every effort to ensure that your personal data is accurate and up-to-date. If you believe that the information we hold about you is incorrect or out of date, you can contact us and we will make the appropriate corrections.
          </p>
          <p className={styles.textPrivacyPolicy}>
            c. Deletion of data: You can ask us to delete your personal data from our system. We will comply with your request, except where we have a legal obligation to retain this data.
          </p>{' '}
          <h3 className={styles.titlePrivacyPolicy}>Part 2:</h3>
          <p className={styles.subtitlePrivacyPolicy}>
            Use of cookies and analytical tools
          </p>
          <p className={styles.textPrivacyPolicy}>
            a. Use of cookies: We use cookies and other tracking technologies to improve the functionality of the application and collect anonymous statistics. Users have the option to manage cookie settings in their browser and refuse their use, but this may affect some functions of the application.
          </p>
          <p className={styles.textPrivacyPolicy}>
            b. Analytics tools: We use analytics tools, such as Google Analytics, to collect aggregated information about the use of the application. This data helps us understand and improve the user experience. The information collected by these tools is anonymous and does not contain personal data.
          </p>{' '}
          <h3 className={styles.titlePrivacyPolicy}>Part 3:</h3>
          <p className={styles.subtitlePrivacyPolicy}>Policy on children</p>
          <p className={styles.textPrivacyPolicy}>
            The Kokoruz application is intended only for persons who have reached the age of 18. We do not knowingly collect any personal data from persons under the age of 18. If we determine that we have collected a child&apos;s personal data without the consent of their parent or legal guardian, we will immediately delete that data from our servers..
          </p>{' '}
          <h3 className={styles.titlePrivacyPolicy}>Part 4:</h3>{' '}
          <p className={styles.subtitlePrivacyPolicy}>
            Changes to the Privacy Policy
          </p>
          <p className={styles.textPrivacyPolicy}>
            We may periodically update this privacy policy to reflect changes in the law or company policy. We will notify you of any material changes by posting an update notice on our website or app. We recommend that you periodically review the privacy policy for changes.
          </p>
          <h3 className={styles.titlePrivacyPolicy}>Part 5:</h3>{' '}
          <p className={styles.subtitlePrivacyPolicy}>Data protection</p>
          <p className={styles.textPrivacyPolicy}>
            We take reasonable technical and organizational measures to ensure the protection of user&apos;s personal data. These measures include applying data encryption, limiting access to personal data to only necessary employees, and establishing mechanisms for the prevention and detection of data security breaches.
          </p>
        </div>
      </div>
  );
};
