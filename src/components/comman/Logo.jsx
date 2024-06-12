import Image from './Image';
import LogoImg from '../../assets/quiz-logo.png';

export const Logo = ({ className, ...props }) => {
  const LogoClasses = `${className} inline-block`;
  return (
    <a href="#" {...props} className={LogoClasses}>
      <Image src={LogoImg} alt="Quiz App" />
    </a>
  );
};
