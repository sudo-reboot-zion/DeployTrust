import { cn } from '@/lib/utils';
import { CardProps } from '@/types/regular.dt';

import Image from 'next/image';





function Card({ title, description, image, buttonClassName, imageClassName }: CardProps) {
  return (
    <div className='relative mb-20 '>
      <div className="border-light border h-[400px] mb-20 rounded-3xl relative shadow-lg"> 
        <div className={cn("absolute dark:text-light", imageClassName)}>
          <Image src={image} alt={`${image}.img`} height={100} width={200} />
        </div>

        <button 
      className={cn(
    "bg-darkGray uppercase text-light dark:border-light rounded-full font-pop py-3 sm:py-6 lg:py-5 px-4 sm:px-8 lg:px-5 text-[16px] border border-dark", 
    buttonClassName 
  )}
>
  {title}
</button>

      </div>

      <div className='relative '>
        <p className="font-poppins text-start absolute bottom-[-60] right-4 w-full px-4 dark:text-light">
          {description}
        </p>
      </div>
    </div>
  );
}



export default Card;

