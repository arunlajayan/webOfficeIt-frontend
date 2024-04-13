import Link from 'next/link';
import ButtonLink from '../../Ui/ButtonLink';

// Component
const Links = () => {
  return (
    <section className="flex items-center gap-3">
      <ButtonLink href="/" text="Main Page" />
      <ButtonLink href="/" text="Products" />
      <div ><Link href="?modal=true"><button className='btn-modal'>Add New Course</button></Link></div>
    </section>
  );
};

export default Links;
