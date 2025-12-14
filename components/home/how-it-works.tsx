export default function HowItWorks() {
  return (
    <section
      className={`how-it-works relative w-full min-h-[70vh] my-8 text-parchment-white py-8 flex items-center font-raleway`}
    >
      <div className="how-it-works__inner w-full">
        <div className="how-it-works__inner_header text-center mb-16">
          <h2 className="md:text-5xl text-4xl font-bold mb-2">
            How Composite NFTs Work
          </h2>
          <p className="max-w-[800px] mx-auto md:text-xl text-lg text-cream-bg">
            Imagine an avatar from your favorite FPS game. Forge Realm allows multiple creators to collaborate, layering new traits, accessories, and designs onto a single NFT.
          </p>
        </div>

        <div className="how-it-works__inner_steps flex flex-wrap justify-center gap-x-8 gap-y-16">
          <div className="step flex flex-col items-center md:w-[400px] w-full">
            <img src="/assets/icons/creator_1.svg" alt="Creator one svg" width={100} height={50} className="mb-8" />
            <h3 className="md:text-2xl text-xl text-center font-semibold">Creator 1: Character Base</h3>
            <p className="text-center md:text-lg text-normal text-cream-bg">Mints an avatar character NFT</p>
          </div>

          <div className="step flex flex-col items-center w-[400px]">
            <img src="/assets/icons/creator_2.svg" alt="Creator two svg" width={100} height={50} className="mb-8" />
            <h3 className="md:text-2xl text-xl text-center font-semibold">Creator 2: Custom Trait</h3>
            <p className="text-center md:text-lg text-normal text-cream-bg">Mint a custom trait (helmet, weapon, shield NFT)</p>
          </div>

          <div className="step flex flex-col items-center w-[400px]">
            <img src="/assets/icons/creator_3.svg" alt="Creator three svg" width={100} height={50} className="mb-8" />
            <h3 className="md:text-2xl text-xl text-center font-semibold">Creator 3: Forge & Compose</h3>
            <p className="text-center md:text-lg text-normal text-cream-bg">Merge these NFTs to create an evolved character</p>
          </div>
        </div>
      </div>
    </section>
  );
}
