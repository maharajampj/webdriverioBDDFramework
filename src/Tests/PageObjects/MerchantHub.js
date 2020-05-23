import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class MerchantHub extends Page
{
    open ()
    {
     super.open("/commercestudio/merchanthub") ;   
    }
}
export default new MerchantHub()