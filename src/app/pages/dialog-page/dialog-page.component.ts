import { Component } from "@angular/core";
import { DialogService } from "src/app/components/dialog/dialog.service";
import {AccordionData} from "../../components/accordion/accordion/accordion.component";

@Component({
  selector: 'dialog-page-component',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss']
})

export class DialogpageComponent {

  constructor(public dialogService: DialogService) { }

  public selectedSection: string | number = 'Preview';

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

  public selectedSwitchSection(section: number | string): void {
    this.selectedSection = section;
  }
}
