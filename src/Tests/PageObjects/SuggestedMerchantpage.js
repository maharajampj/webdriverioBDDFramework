import Page from './Page'
class SuggestedMerchantpage extends Page
{
    open ()
    {
     super.open("/commerce-studio/suggestedMerchants") ;   
    }

}
export default new SuggestedMerchantpage()