/*import Image from "next/image";


export default function Home() {
  return (
    <>
    </>    
  );
}*/

import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Image src="/example.jpg" alt="Example" width={500} height={300} />
    </div>
  );
}

