import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {DictionaryService} from './dictionary.service';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
