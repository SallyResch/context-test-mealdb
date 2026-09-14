import { Mail, Phone, Pin } from "lucide-react"
import { Great_Vibes } from "next/font/google"
import { Caveat } from "next/font/google"
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
})
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(135deg,_#fde68a_0px,_#fde68a_20px,_#f5d0fe_20px,_#f5d0fe_40px)]">
      <div className="max-w-md m-auto">
        <div className="my-7 bg-amber-200 shadow-2xl p-2 rounded">
          <h2 className={`text-5xl text-center font-light`}>About <span className={`${greatVibes.className}`}>Sally´s</span></h2>
          <h3 className={`${caveat.className} text-center`}>Coziest Corner in Town</h3>
          <p className="tracking-wide mt-5">Welcome to a restaurant with a big heart.
            We believe that good food tastes even better when it’s enjoyed in a warm,
            welcoming atmosphere.
            Whether you’re stopping by for a quick lunch, meeting friends for dinner,
            or simply looking for a cozy place to relax with something delicious,
            there’s always a seat waiting for you at <span className={`${greatVibes.className} text-lg`}> Sally’s.</span></p>
        </div>
        <div className="bg-[url('/AI-resturang.png')] bg-contain bg-top-center bg-no-repeat min-h-[600px] pt-25 shadow-2xl">
          <div className="bg-black/50 w-[300px] m-auto text-white py-5">
            <h3 className="text-4xl font-light ">Opening Hours</h3>
            <div><p>Monday - Friday: </p><p>11.00 - 21.00</p></div>
            <div><p>Saturday: </p><p>12.00 - 22.00</p></div>
            <div><p>Sunday: </p><p>12.00 - 20.00</p></div>
            <div>Kitchen closes 30 minutes before closing time.</div>
          </div>
        </div>

        <div className="my-7 bg-amber-200 shadow-2xl">
          <h3 className="text-4xl font-light ">Contact</h3>
          <p className="my-4">Have a question, want to make a reservation, or just want to say hello?</p>
          <h4 className="font-semibold">Sally’s – Coziest Corner in Town</h4>
          <div className="flex flex-row my-2">
            <Pin className="fill-red-500 text-red-500" />
            <p>123 Cozy Street, Stockholm</p>
          </div>
          <div className="flex flex-row my-2">
            <Phone className="text-blue-500 fill-blue-500" />
            <p>+46 8 123 45 67</p>
          </div>
          <div className="flex flex-row my-2">
            <Mail className="text-amber-950" />
            <p>hello@sallys.se</p>
          </div>
        </div>

        <div className="mb-7 bg-amber-200 shadow-2xl">
          <h3 className="text-4xl font-light mb-3">Who we are</h3>
          <img src="/AI-Sally.png" alt="picture of Sally with brown hair and a friendly smile." />
          <p className="tracking-wide my-5">Sally’s started with a simple idea: create a place where everyone feels at home.
            We’re a small, passionate team who love good food, good company, and the little
            moments that make an ordinary day special. Our menu is inspired by comforting classics
            , fresh ingredients, and dishes made with a lot of care.
            For us, a restaurant is about more than what’s on the plate.
            It’s about the laughter around the table, the smell coming from the kitchen,
            and that feeling of not wanting to leave just yet.
            So come in, grab a seat, and stay awhile.</p>
          <p>Welcome to Sally’s — your coziest corner in town.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage