import { Component } from 'react';
import Member from '../../components/about/sections/Member'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            member: ''
        }
    }

    async componentDidMount() {
        const member = await window.next.router.query.id;
        this.setState(() => ({
            member: member
        }))
    }

    displayPage = () => {
        switch (this.state.member) {
            case 'siami':
                return <Member style="siami_about_image" title="Siami" message="Zothansiami (Siami) Ralte was born on the Northeast India state of Mizoram. She was raised in a Christian family, graduated from college and came to Thailand as a teacher. After a year in the city of Chiangmai, she moved to the Karen tribal village of Ban Nong Chet Nua (Museekee). In 1989, she married Soradaet Manahmigaebthong, a Karen native who also teaches at the Friendship School. Their first daughter Sirikanya was born September 25, 1992, their son Sitakan born was 1997 and Neekamoi a orphan accepted into Siami's family she was born 1997. Siami has a gift of administration which she has used to gain the trust of the local people and the respect of authorities at all levels in Thailand. Siami is blessed when she sees each boy and girl establishing a progressive path from desperate poverty to a self supporting, satisfied adult." />
            case 'lachaeh':
                return <Member style="lachaeh_about_image" title="laechaeh" message={`This is the story of one little girl in Northern Thailand who was given a chance and grabbed it with both hands! October 1992, we were visiting Musseekee in Northern Thailand. Don had opened the new Centre for Hill Tribes Development and Resource Centre and the Fox family, Don, Kay and Tasi, was ready to return to Chiangmai. A man and his 13 year old daughter arrived. They had walked all day through the jungle to enroll her at the centre. Siami, Director of the Centre, asked the man if he would like to go to Chiangmai. She knew he had never been to the city. He responded, "No, please take my daughter!" Lacheah was given no option. She climbed into the back of the covered pick up truck carrying a shoulder bag. Tasi, our daughter who cares about all details, said, "Where is her suitcase?" She was going to be there for a week! Siami replied, "She's carrying everything she owns!" Tasi,who has a considerable wardrobe, was "floored".`} />
            case 'moosee':
                return <Member style="moosee_about_image" title="moosee" message={`Consider an 8 year old girl whose father had murdered his girlfriend and committed suicide, then her mother died suddenly. This would most certainly be an "at risk" child in the USA. This happened to Moosee in Thailand 5 years ago and she arrived on Siami's doorstep, homeless! We have watched her progress at the Center as we have visited in '95, '97,'98 and '99. Today at 14 she is a leader and example among the students at Hill Tribes Development and Resource Center. I don't recall much about Moosee in the early years except she had a strong singing voice. In 1999 she was outstanding as a leader. She has learnt to play the guitar and leads a large choir when the students perform. She organizes her group of younger students to complete their daily chores with joy (they sing on their way to carry water a quarter mile). She has learnt enough English, her 3rd language, to communicate with guests. She is a delight to meet as she always has a beautiful smile. Does this sound like an "at risk" child? Why has she recovered so well and been restored to a normal life? If you ask Siami, you get only one answer. Moosee accepted Jesus for all He has to offer and has God as her Heavenly Father. Can life be more simple?`} />
            case 'wanida':
                return <Member style="wanida_about_image" title="wanida" message="Wanida came from a very poor family when she was just a liitle girl. Wanida wanted to join our program so she could attend school and become a teacher someday. Bob and Mary Carpenter sponsored Wanida almost 20 years ago. Wanida went on to graduate high school and with the Carpenter's help continued her education at the University level studing to become a teacher. After completing 5 years of University, she stands proud at her Graduation from the University. The system in Thailand to become a teacher is time consuming and also there is a one year waiting period to recieve your teachers certificate. Bob and Mary Carpenter decided to keep supporting Wandia as she volunteered at our local school to get experience as a teacher. After her year volunteering, she now is a Government teacher in a village school about 4 hrs from Chiang Mai." />
            case 'wandaet':
                return <Member style="wandaet_about_image" title="wandaet" message={`This is a story about "Obedience to Parents" by a young girl in Thailand. Wandaet came to Siami's Centre in the Northern Hills of Thailand some time in 1994. She had little formal education but a strong will to succeed. Wandaet did not qualify to attend Friendship School in Musseekee so Siami started her on a correspondence course. She "ate" it! I dont remember her during our visit in 95 but I am sure she was one of Lacheah's sewing buddies in the class under Nitoo's instruction. She did so well that by 1996 she qualified for Higher Education. She had her sights set on Phayao Bible College, Chiangmai, with Lacheah. Then her parents saw the potential in their daughter and asked for her to return to her village to take a position as Kindergarten Teacher. Wandaet struggled with this request.

                She saw God's plan for her life attending Phayao College. How could it end here? The leaders of the Centre prayed about it and Siami gave her the direction to go home as requested by her parents. Dejected but not destroyed, she began teaching. She did a great job but was not paid while in training. This went on until one day Siami visited and asked the Kindregarten manager when does the pay start? Never! She is not qualified, they told her parents. Within weeks Wandaet was back at the Centre working to make enough for college. At this time Pastor Curt Peterson and family were asking for a girl to sponsor. They chose Wandaet and the door to the college of her dreams flew open. God honors obedience.
                
                Today she is a hard working student with good grades. She has impressed her parents so that they have requested her brother attend the college when he finishes school. Wandaet and Lacheah gave up their Christmas vacation to work at the Centre while we were there. They were a big part of the Celebration preparation which fed 400 plus on Saturday. Her new dream: To establish a Centre like the one Siami opened to her so that she can help other Hill Tribe children realize their dreams.
                
                Wandaet is married to Mr. Pondsark who works the Forest Departent at Wat Chan. She has a boy, Manny aged 4 and a new girl. She lives in Chemnoi and teaches sewing to village ladies. She worked at Museekee Center as Team Leader, assistant Nurse, Teacher, Cook for over 12 years. A Willing Servant.`} />
            case 'don_and_kay':
                return <Member style="don_kay_about_image" title="don and kay" message={`In 1974, Don & Kay took a group from Oxley Methodist Church to the Wacol Refugee Center near Brisbane. With God's love and grace we cared for a small group of Vietnamese and Cambodians. We took them to our home and gave them our kitchen to cook familiar food. Drove then to the river for a picnic. We were not admired by all Australians!

                In 1975, a Vietnamese family of 5 arrived in Brisbane with no home. We enclosed our patio as #7 bedroom, moved the family in with us and Kay cared for the children while the parents found jobs. They stayed 6 months.
                
                In 1981, Kay and Tasi drove every week to Long Beach, Calif. for Kay to teach English as 2nd language to Cambodian refugees. Over the next 10 years we were honored to attend several weddings of Cambodian couples from these families in Long Beach.
                
                In 1981, we joined others at Trinity Lutheran Church to host Japanese students in a Home Stay Program run by Miriam Varvais (Luttio). We did this annually until 1998.
                
                In July 1988, our whole family joined a HANDS team with YWAM to serve in Thailand & Philippines. We also visited Japan, Taiwan, Hong Kong. On this trip we met Siami.
                
                In October 1992, Don, Kay & Tasi flew to Thailand via Hong Kong. This was to be our first "Handclasp" mission.
                
                In March 1995, Don, Kay & Tasi returned to Thailand via Hong Kong.
                
                In October 1997, Don & Kay led the first TLC - USC Handclasp trip to Thailand via Taiwan and Singapore.
                
                In December 1998, we repeated the 97 trip. This was the first Christmas in Museekee.
                
                In October 1999, we took the large joint group to begin stage 2, expansion to the city.
                
                In December 2000, Don & Kay visited Museekee for the #7 adventure.
                
                In November 2001, Don & Kay had 3 ladies from a Moravian Church in Penn.join our group.
                
                In November 2002, First Christian Church Visalia sent a team led by theirPastor. Don & Kay stayed in Thailand until March.
                
                In November 2003, Don & Kay led another team from Visalia, Bethlehem & San Pedro. The Foxes spent 5 months serving at Musekee and Huaypha Centers. Being involved with the Asian community was never an "accident".
                
                However, it did involve 2 steps.
                
                • Being willing to drop all preconceived ideas of how to "help" people in circumstances worse than us.
                
                • Being willing to "go" when all reason would advise "stay".
                
                Kay has a Chinese heritage of which we are proud. I don’t regret any "opportunity" we have explored over these years.. In fact, I believe it has placed our family on a strong base from which we are able to serve each other and others.`} />
            default:
                return <Member message="oiffiehfiuhefoiw" />
        }
    }

    render() {
        return (
            <div>
                {
                    this.displayPage()
                }
            </div>
        )
    }
}

export default Post