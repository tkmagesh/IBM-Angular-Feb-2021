import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations: [
        SortPipe,
        TrimTextPipe,
        ElapsedPipe
    ], 
    providers : [],
    imports : [],
    exports : [
        SortPipe,
        TrimTextPipe,
        ElapsedPipe
    ]
})
export class UtilsModule{

}