import { Injectable } from "@angular/core";
import {DynamicBase1Dropdown} from './dynamic-form-base1-dropdown';
import { DynamicBase1 } from "./dynamic-form-base1";
import { DynamicBase1Textbox } from "./dynamic-form-base1-textbox";
import { Observable, of } from "rxjs";

@Injectable()
export class DynamicService {

    getQuestions() {
        const questions: DynamicBase1<string>[] = [
            new DynamicBase1Dropdown({
                key: 'firstVerb',
                label: 'First Verb',
                options: [
                    {key: 'jumped', value: 'Jumped'},
                    {key: 'ran', value: 'Ran'},
                    {key: 'wiggled', value: 'Wiggled'},
                    {key: 'slipped', value: 'Slipped'},
                    {key: 'dabbed', value: 'Dabbed'},
                    {key: 'flossed', value: 'Flossed'},
                    {key: 'nay-nayed', value: 'Nay-nayed'},
                ],
                order: 4
            }),
            new DynamicBase1Dropdown({
                key: 'secondVerb',
                label: 'Second Verb',
                options: [
                    {key: 'drinking', value: 'Drinking'},
                    {key: 'flipping', value: 'Flipping'},
                    {key: 'failing', value: 'Failing'},
                    {key: 'absquatulating', value: 'Absquatulating'},
                ], 
                order: 5
            }),
            new DynamicBase1Textbox({
                key: 'firstNoun',
                label: 'First Noun',
                // value: 'Faggot',
                required: true,
                order: 1
            }),
            new DynamicBase1Textbox({
                key: 'secondNoun',
                label: 'Second Noun',
                type: 'secondNounType',
                required: true,
                order: 2
            }),
            new DynamicBase1Dropdown({
                key: 'thirdNoun',
                label: 'Third Noun',
                options: [
                    {key: 'gibbon', value: 'Gibbon'},
                    {key: 'blubber', value: 'Blubber'},
                    {key: 'florpus', value: 'Florpus'},
                    {key: 'doodlesack', value: 'Doodlesack'},
                    {key: 'echidna', value: 'Echidna'},
                ], 
                order: 3
            }),
        ];
        console.log("dynamic-form1.service")

        return of(questions.sort((a:any, b:any) => a.order - b.order));
    }
}