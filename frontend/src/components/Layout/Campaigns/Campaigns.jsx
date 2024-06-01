import CampaignItem from "./CampaignItem";
import "./Campaigns.css"

const Campaigns = () => {
    return (
        <section id="campaigns">
            <div className="container">
                <div className="campaign-wrapper">
                    <CampaignItem />
                    <CampaignItem />
                </div>
                <div className="campaign-wrapper">
                    <CampaignItem />
                    <CampaignItem />
                </div>
            </div>
        </section>
    )
}

export default Campaigns