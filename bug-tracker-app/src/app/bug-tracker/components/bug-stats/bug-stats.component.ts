import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Bug } from "../../models/Bug";

@Component({
    selector : 'app-bug-stats',
    template : `
        <div>{{ getCurrentTime() }}</div>
        <section class="stats">
            <span class="closed">{{ bugs | closedCount }}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `,
    styleUrls : ['bug-stats.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

    @Input('list')
    bugs : Bug[] = [];

    getCurrentTime(){
        return new Date();
    }
}