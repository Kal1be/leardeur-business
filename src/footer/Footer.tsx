import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './footer.css'
import { faCouch } from "@fortawesome/free-solid-svg-icons"
function Footer() {
  return (
    <div className="bg-slate-800 lg:px-12 px-4 mt-10  text-gray-300 py-4">
        <div className="md:flex justify-between">
        <div className="my-2">
            <h2 className="font-bold text-2xl md:text-3xl text-slate-200 my-1" id="title"><FontAwesomeIcon icon={faCouch} className="me-2"/>Leadeur Business</h2>
            <p className="lg:w-96">Leadeur business est une platforme en ligne pour la vente de fauteuil et canaper de differents choix.Choisir Leader business c'est choisir l'accesoire et le plus benefique est que la livraison ce fait a domicile.</p>
        </div>
        <div className="my-2">
            <h2 className="text-xl font-bold text-slate-200">A propos de nous?</h2>
            <ul>
            <li>Avoir de l'aide</li>
            <li>Acheter un produits</li>
            <li>Devenir Affiliante</li>
            <li>Vendre un produits</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div className="my-2">
            <h2 className="text-xl font-bold text-slate-200">Notre business</h2>
            <ul>
            <li>Avoir de l'aide</li>
            <li>Acheter un produits</li>
            <li>Devenir Affiliante</li>
            <li>Vendre un produits</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div className="my-2">
            <h2 className="text-xl font-bold text-slate-200">Nos departement</h2>
            <ul>
            <li>About</li>
            <li>Service</li>
            <li>Product</li>
            <li>Feature</li>
            <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className="flex items-center  my-4">
          <h2 className="text-2xl font-bold">Suivez nous sur:</h2>
          <div className="w-32 flex justify-between ms-4 text-xl text-sky-200">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faXTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faLinkedin}/>
          </div>
        </div>
      <hr />
      <div className="md:flex justify-between my-3">
        <h2>Copyright ©2023 Universite de Toukra, tous droits reserves.</h2>
        <h2>Powered by Devsoftware Yahoulbo &copy; 2024</h2>
      </div>
    </div>
  )
}

export default Footer
