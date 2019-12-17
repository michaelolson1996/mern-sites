import Question from '../components/Question';
import Link from 'next/link';
import Button from '../../global/Button';

const SectionOne = () => {
    return (
        <div className="questions">
            <Question
                question = "How long should my child sponsorship last&#63;"
                answer = "Handclasp child sponsorship offers you the opportunity to stay with a child for a number of years&#44; usually through the school year in which the child reaches the age of 18 to 22&#46;  While we hope that you will be able to continue in your support of your sponsored child until he or she completes the Handclasp program&#44; we recognize that sponsors&#39; circumstances sometimes change&#46; You may discontinue your sponsorship at any time&#46; Please understand that a sponsored child&#39;s circumstances may change&#44; too&#46; For example&#44; sometimes families move beyond the reach of Handclasp&#39;s program and children have to leave Handclasp sponsorship&#46; We will inform you as quickly as possible if any such circumstance affects the child you sponsor&#44; and we'll offer you the opportunity to support another child in need of your help&#46;" />
            <Question
                question = "How much does it cost to sponsor a child&#63;"
                answer = "If you choose to sponsor a child&#44; the cost is only &#36;20 per month&#46;" />
            <Question
                question = "Will I be the only person sponsoring the child I&#39;m helping&#63;"
                answer = "Yes&#46; The child you're helping has just one sponsor&#58; you&#46; That's why your prayers&#44; letters and support mean so much to your sponsored child&#46; Even if you choose to sponsor a child as a family or a group &#40;for example&#44; a youth group or a Sunday school class&#41;&#44; the child you help will still be relating to your family or group as his or her only sponsor&#46; No other group or individual will also sponsor the child you help&#46;" />
            <Question
                question = "What specific benefits will the child I sponsor receive&#63;"
                answer = "The child you sponsor through Handclasp will receive opportunities and services that most of the world's poorest children will simply never see&#46; These opportunities and services include the following&#58; The opportunity to receive an education&#58; In some cases&#44; this means providing the cost of school fees&#44; clothing and supplies&#46; In other cases&#44; it means providing tutoring&#44; help with homework&#44; encouragement and&#44; if necessary&#44; participation in a literacy program outside the classroom&#46; Your Handclasp sponsorship will allow one special child to stay in school longer if formal schooling is an option and get the most out of his or her education&#46; The opportunity to be healthy&#58; The health of the child you sponsor will be monitored and care will be provided as needed&#46; Children are taught about hygiene and how to maintain personal health&#46; In addition&#44; and according to their needs&#44; many Handclasp children receive supplementary food&#46;The opportunity to develop self-confidence and social skills&#58; The child you support will be part of a church-based program where Christian adults offer love&#44; guidance&#44; personal attention&#44; guided recreation and safety&#46; The opportunity to hear the gospel and learn about Jesus&#58; Most important&#44; your Handclasp sponsorship provides the child you sponsor with regular Bible training and encouragement through a local church committed to Christ and the children in its community&#46;" />
            <Link href="/donate">
                <Button text="Donate" />
            </Link>
        
        </div>
    )
}

export default SectionOne