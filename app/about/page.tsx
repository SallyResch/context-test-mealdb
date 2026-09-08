import { Mail, MailBadge, Phone, Pin } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="max-w-md m-auto">
      <div>
        <h2>About Sally´s</h2>
        <h3>Coziest Corner in Town</h3>
        <p>Welcome to <span>Sally’s – Coziest Corner in Town</span>, 
          a little restaurant with a big heart. 
          We believe that good food tastes even better when it’s enjoyed in a warm, 
          welcoming atmosphere.
          Whether you’re stopping by for a quick lunch, meeting friends for dinner, 
          or simply looking for a cozy place to relax with something delicious, 
          there’s always a seat waiting for you at Sally’s.</p>
      </div>
      <div>
        <h3>Opening Hours</h3>
        <div><p>Monday - Friday: </p><p>11.00 - 21.00</p></div>
        <div><p>Saturday: </p><p>12.00 - 22.00</p></div>
        <div><p>Sunday: </p><p>12.00 - 20.00</p></div>
        <div>Kitchen closes 30 minutes before closing time.</div>
      </div>
      
      <div>
        <h3>Contact</h3>
        <p>Have a question, want to make a reservation, or just want to say hello?</p>
        <h4>Sally’s – Coziest Corner in Town</h4>
        <div>
          <Pin className="text-red-500"/>
          <p>123 Cozy Street, Stockholm</p>
        </div>
        <div>
            <Phone className="text-blue-500"/> 
            <p>+46 8 123 45 67</p>
        </div>
        <div>
          <Mail/>
          <p>hello@sallys.se</p>
          </div>
        <Mail/>
      </div>
      
      <div>
      <h3>Who we are</h3>
      <p>Sally’s started with a simple idea: create a place where everyone feels at home.
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
  )
}

export default AboutPage