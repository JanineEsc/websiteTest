import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/product/t-shirt" className="cursor-pointer">
        <div>
          <img className="w-50 h-50 object-cover" src="https://i.pinimg.com/736x/27/15/76/27157648e1ad5532f448e7da81188d44.jpg" alt="t-shirt" />
          <h2 className="mt-3">T-shirt</h2>
          <p>Price: <strong>200 SEK</strong></p>
        </div>
      </Link>
      <Link href="/product/dress" className="cursor-pointer">
        <div>
          <img className="w-50 h-50 object-cover" src="https://i.pinimg.com/736x/5e/81/f0/5e81f0b0690996d301c67abe583349f9.jpg" alt="dress" />
          <h2 className="mt-3">Dress</h2>
          <p>Price: <strong>400 SEK</strong></p>
        </div>
      </Link>
      <Link href="/product/skirt" className="cursor-pointer">
        <div>
          <img className="w-50 h-50 object-cover" src="https://i.pinimg.com/736x/10/3a/01/103a016a1c3028c48436ffeaa636de8b.jpg" alt="skirt" />
          <h2 className="mt-3">Skirt</h2>
          <p>Price: <strong>300 SEK</strong></p>
        </div>
      </Link>
    </div>
  );
}

