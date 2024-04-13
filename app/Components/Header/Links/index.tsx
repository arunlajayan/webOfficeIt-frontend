'use client'
import Link from 'next/link';
import ButtonLink from '../../Ui/ButtonLink';

import { useCart } from '@/app/context';


const Links: React.FC = () => {
 
  const { cart } = useCart();
 

  return (
    <section className="flex items-center gap-3">
      <ButtonLink href="/" text="Main Page" />
      <ButtonLink href="/" text="Products" />
      <ButtonLink href="/cart" text={`Cart Item ${cart.length}`} /> 
      <div><Link href="?modal=true"><button className='btn-modal'>Add New Course</button></Link></div>
     
    </section>
  );
};

export default Links;
