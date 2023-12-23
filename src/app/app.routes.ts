import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { BehaviourSubjectExampleComponent } from './component/subjects/behaviour-subject-example/behaviour-subject-example.component';

export const routes: Routes = [
    {path:'welcome', component:WelcomeComponent},
    {path:'behaviourExample', component:BehaviourSubjectExampleComponent}
];
