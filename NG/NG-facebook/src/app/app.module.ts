import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryComponent,
    StoryListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
