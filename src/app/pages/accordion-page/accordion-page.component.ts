import { Component } from "@angular/core";
import { AccordionData } from "src/app/components/accordion/accordion/accordion.component";
import { NotificationService } from "../notification-page/notification-service";



@Component({
  selector: 'accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.scss'],
})

export class AccordionpageComponent {

  constructor(private notifyService: NotificationService,
  ) {
  }


  public selectedSwitchSection: number | string = 'Preview'

  public content: AccordionData[] = [
    {
      title: 'Ellie Williams',
      text: 'Ellie grew up as an orphan in the Boston quarantine zone and attended a military preparatory school, where she met and befriended Riley Abel. When Ellie was fourteen, the pair were both infected with the Cordyceps brain infection, where Ellie discovered she was immune. A friend of her mother\'s and the leader of the Fireflies, Marlene, believed that she was the key to reverse engineering a vaccine. Marlene tasked Joel Miller, a smuggler, with escorting Ellie outside of the QZ. The simple drop-off turned into a year-long journey across America, and the two eventually formed a close bond. Upon reaching the Fireflies in Salt Lake City, Joel learned that only killing Ellie could create the cure. Refusing to allow this, he killed the head surgeon and escaped with Ellie to settle down in Jackson, his brother\'s community in Wyoming. For the next four years, Ellie came to resent Joel for saving her life. In 2038, Abby Anderson, a former Firefly and the surgeon\'s daughter, found and killed Joel. Ellie vowed revenge and pursued Abby to Seattle. Her efforts were fruitless, leading her to retire on a farm with her girlfriend Dina and her son JJ. Unable to forgive Abby, Ellie abandoned her family and pursued her once again to Santa Barbara, only to spare Abby in the end. She returned to Jackson once more, coming to terms with Joel\'s death and his decision to save her life.'
    },
    {
      title: 'Joel Miller',
      text: 'Joel was a survivor in post-apocalyptic America that had been ravaged by the Cordyceps brain infection. After losing his only daughter Sarah in the early stages of the outbreak, Joel became a ruthless and cynical smuggler eventually tasked with smuggling and protecting Ellie Williams, a young girl who was the key to mankind\'s survival. Joel eventually formed a strong bond with her. Joel was born on September 26, 1981, in Arlington, Texas, and grew up in the state alongside his younger brother Tommy.\n' +
        '\n' +
        'As a child, Joel developed a passion for music, learning to play acoustic guitar and once even aspired to become a singer. Joel had a daughter named Sarah, and was married to her mother for a short period of time. Saddled early in life with the responsibilities of parenthood at a young age, he never had the opportunity to attend college.\n' +
        '\n' +
        'Regarding his ex-wife, whatever occurred between them is painful for Joel to talk about. Shortly after Sarah was born, Joel\'s wife left him. As a result, he raised their only daughter as a single father for the majority of his life. The two lived together in a two-story single-family home somewhere in or around Austin, Texas, located in Travis County through Texas State Highway 71.\n' +
        '\n' +
        'As an adult, Joel worked as a carpenter, alongside Tommy. He kept a revolver locked in a safe box in his office and owned a pick-up truck outside his house. Building plans laid on his bedside table along with several copies of a book called Construction Regionalism on top of his bookshelf. He had ambitions of starting his own business, with a copy of Everything You Need to Know About Creating a Startup also on a table next to his bed. His job kept him fit, and he owned a treadmill in his bedroom. He mentioned in a phone call that he was struggling to keep his job with a contractor.\n' +
        '\n' +
        'Despite his long, hard-working hours, he still managed to spend quality time with Sarah, as seen in photographs displayed throughout their home showing the two on a cruise, at a carnival with Tommy, and one of Sarah\'s soccer matches. Additionally, the two often went on several hikes together. Sarah also made him take her to every museum in Texas.\n' +
        '\n' +
        'On his 32nd birthday—just hours leading up to the outbreak—Sarah gave him a new watch as a gift to replace the one he had broken months before. This became a cherished memento he manages to keep in the turbulent years ahead.'
    }, {
      title: 'Tommy Miller',
      text: 'A caring and compassionate man, Tommy survived the early years of the outbreak with Joel. However, the two separated as Tommy sought a more meaningful life than mere survival, leading him to join the Fireflies and later seek redemption through his wife, Maria, and the community of Jackson.'
    }, {
      title: 'Frank ',
      text: 'Frank was a character who appeared postmortem in The Last of Us. It is heavily implied he was Bill\'s partner and lover. After becoming infected, Frank took his own life by hanging.'
    },
  ]

  public content2: AccordionData[] = [
    {
      title: 'Sarah Miller',
      text: 'Sarah Miller is a playable supporting character in The Last of Us. She was the 12-year-old daughter of Joel before the Cordyceps brain infection outbreak.Sarah was born in late 2000 or early–mid 2001, to Joel Miller and an unknown mother. Prior to the outbreak, she lived a regular, everyday life in the Austin, Texas area with her father Joel. She was on a youth soccer team called the "Defenders", playing in the number 14 position, and won an individual award in a game, as evidenced by several pictures in their house, especially one of her and Joel together. She also enjoyed hiking with her father and skateboarding, as shown by a skateboard leaning against the wall in her room at the start of the game. She was a fan of the rock band "The Bash", having a poster of them on her bedroom wall. She also liked the "Dawn of the Wolf" films, a play on the Twilight saga, as seen by a poster in her bedroom. It is implied she made Joel take her to see the film. Sarah\'s mother and Joel were married "for a while" but she left Joel shortly after Sarah was born.'
    },
    {
      title: 'David ',
      text: 'David was the main antagonist of the winter chapter in The Last of Us, appearing as the leader of a group of cannibalistic survivors. Very little is known about David\'s past. At some point before the events of the game, he came to lead a group of survivors. He befriended James and the two came to trust each other.'
    }, {
      title: 'Bill',
      text: 'Bill is a supporting character in The Last of Us. He is a survivor who maintains an uneasy alliance with Joel and Ellie.Bill was well-equipped for survival before the Cordyceps brain infection outbreak, having obtained mechanical skills at some point in his life as he is able to repair vehicles and build things from scraps. He also adapted to the new world and became a competent scavenger. To protect himself from the infected and hunters, Bill constructed many barricades and traps around his hometown'
    }, {
      title: 'Gerald "Jerry" Anderson',
      text: 'Gerald "Jerry" Anderson is a minor character in The Last of Us and a supporting character in The Last of Us Part II. He was the father of Abby and the lead doctor among the Fireflies who was trying to find a cure for the Cordyceps brain infection. A recording by him can be found detailing Ellie\'s immunity in St. Mary\'s Hospital. Prior to the Cordyceps brain infection outbreak, Jerry Anderson lived in the state of Utah and attended the Northern Utah Medical University, where he graduated with a Bachelor of Science in Biology degree in 2007.[5] After the outbreak, he spent many years among the Fireflies under their leader Marlene attempting to find a cure. At some point, he had a daughter, Abby Anderson, and raised her as member of the Fireflies. Within the group, he also looked after people around Abby\'s age, such as Manny Alvarez, Owen Moore and Mel, who he began to train as an understudy. Jerry was also an avid coin collector, a trait his daughter soon picked up'
    },
  ]

  public selectSection(section: string | number): void {
    this.selectedSwitchSection = section;
  }

  public showNotify(): void {
    this.notifyService.open({
      title: 'Accordion'
    })
  }
}
