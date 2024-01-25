import { Component } from "@angular/core";
import { AccordionData } from "../../components/accordion/accordion/accordion.component";


type SwitcCases = string;

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})

export class SidebarComponent {

  public section: SwitcCases = 'checkbox';

  public content: AccordionData[] = [
    {
      title: 'Russia',
      text: 'Russia (Russian: Россия, romanized: Rossiya, [rɐˈsʲijə]), or the Russian Federation,[b] is a country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, extends across eleven time zones, and shares land boundaries with fourteen countries.[c] It is the world\'s ninth-most populous country and Europe\'s most populous country. The country\'s capital and largest city is Moscow. Saint Petersburg is Russia\'s second-largest city and "cultural capital". Other major urban areas in the country include Novosibirsk, Yekaterinburg, Nizhny Novgorod, Chelyabinsk, Krasnoyarsk, and Kazan.Russia (Russian: Россия, romanized: Rossiya, [rɐˈsʲijə]), or the Russian Federation,[b] is a country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, extends across eleven time zones, and shares land boundaries with fourteen countries.[c] It is the world\'s ninth-most populous country and Europe\'s most populous country. The country\'s capital and largest city is Moscow. Saint Petersburg is Russia\'s second-largest city and "cultural capital". Other major urban areas in the country include Novosibirsk, Yekaterinburg, Nizhny Novgorod, Chelyabinsk, Krasnoyarsk, and Kazan.'
    },
    {
      title: 'Canada',
      text: 'Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world\'s second-largest country by total area, with the world\'s longest coastline. Its border with the United States is the world\'s longest international land border. The country is characterized by a wide range of both meteorologic and geological regions. It is a sparsely inhabited country of 40 million people, the vast majority residing south of the 55th parallel in urban areas. Canada\'s capital is Ottawa and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.'
    },
  ]

  public content2: AccordionData[] = [
    {
      title: 'Dogs',
      text: 'The dog (Canis familiaris[4][5] or Canis lupus familiaris[5]) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves,[6][7] and the modern wolf is the dog\'s nearest living relative.[8] The dog was the first species to be domesticated[9][8] by humans. Hunter-gatherers did this, over 15,000 years ago in Germany,[7] which was before the development of agriculture.[1] Due to their long association with humans, dogs have expanded to a large number of domestic individuals[10] and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.[11]'
    },
    {
      title: 'Cats',
      text: 'The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Because of its retractable claws it is adapted to killing small prey like mice and rats. It has a strong flexible body, quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It also secretes and perceives pheromones.'
    },
  ]


  public showMessage(message: string): void {
    alert(message)
  }

  public switchDarkMode(): void {
    document.body.classList.toggle('dark-theme')
  }

  public selectSection(section: string): void {
    console.log(section)
    this.section = section;
  }

  public setButton(selectedValue: any): void {
    console.log(selectedValue)
  }

  public selectDay(day: any): void {
    console.log(new Date(day).toLocaleDateString())
  }

  public isHired(data: any): void {
    console.log(data);

  }



}
