import Image from 'next/image';
import { useState } from 'react';
import HeartIcon from '../../assets/icon-heart.svg';
import DollarCoinIcon from '../../assets/icon-dollar-coin.svg';
import CameraIcon from '../../assets/camera-icon.svg';
import Camera2Icon from '../../assets/camera-2.svg';
import DollarIcon from '../../assets/icon-dollar.svg';
import GlassesIcon from '../../assets/glasses.svg';
import AppStoreIcon from '../../assets/app-store.svg';
import GooglePlayIcon from '../../assets/google-play.png';
import PhonesIcon from '../../assets/phones.png';
import KokoroozIcon from '../../assets/kokorooz-icon.svg';
import { PrivacyPolicyModal } from '../privacy-policy-modal';
import { TermsModal } from '../terms-modal';
import styles from './home.module.css';
import { useRouter } from 'next/router';

export const HomePage = () => {
  const router = useRouter();

  const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);

  const openModalPrivacyPolicy = () => {
    router.push('/privacy_policy')
    // setIsOpenPrivacyPolicy(true);
  };

  const closeModalPrivacyPolicy = () => {
    setIsOpenPrivacyPolicy(false);
  };

  const openModalTerms = () => {
    router.push('/terms_of_use')
    // setIsOpenTerms(true);
  };

  const closeModalTerms = () => {
    setIsOpenTerms(false);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.phonesBlock}>
        <Image
          src={PhonesIcon}
          alt=''
          width={'100%'}
          style={{ maxWidth: '527px', maxHeight: '549px' }}
        />
      </div>
      <div className={styles.infoBlock}>
        <div>
          <div className={styles.icons}>
            <Image src={HeartIcon} alt='' width={'100%'} />
            <Image src={DollarCoinIcon} alt='' width={'100%'} />
            <Image src={CameraIcon} alt='' width={'100%'} />
            <Image src={Camera2Icon} alt='' width={'100%'} />
            <Image src={DollarIcon} alt='' width={'100%'} />
            <Image src={GlassesIcon} alt='' width={'100%'} />
          </div>
          <Image src={KokoroozIcon} alt='' width={'100%'} />
          <h2 className={styles.title}>for basic instincts</h2>
          <p className={styles.text}>
            Publish offers, find your people and get acquainted
          </p>
          <div className={styles.iconsDownload}>
            <Image src={AppStoreIcon} alt='' width={'100%'} />
            <Image src={GooglePlayIcon} alt='' width={'100%'} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.privacyPolicyAndTerms}>
            <a onClick={openModalPrivacyPolicy}>Privacy Policy</a>
            <a onClick={openModalTerms}>Terms of use</a>
          </div>
          <p className={styles.copyright}>
            Copyright © 2024 KOKOROOZ Inc <br />
            All rights reserved
          </p>
        </div>
        {isOpenPrivacyPolicy && (
          <PrivacyPolicyModal
            isOpen={isOpenPrivacyPolicy}
            onClose={closeModalPrivacyPolicy}
          />
        )}
        {isOpenTerms && (
          <TermsModal isOpen={isOpenTerms} onClose={closeModalTerms} />
        )}
      </div>
    </div>
  );
};
