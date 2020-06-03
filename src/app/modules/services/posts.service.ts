import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: any = {
    posts: [
      {
        id: 1,
        name: 'Angular framework',
        imagePath: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/banner_angular.png?alt=media&token=76cf99c5-3934-4ed5-93f2-c6fe72d439fe',
        imageCard: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/card_angular.png?alt=media&token=1afed074-a483-4ad9-956f-201615a65d49',
        userItinerarySummary: 'Day 1: 4PM - 5:00PM',
        tourPackageName: 'Standard Package',
        facts: [
          {
            title: 'What is angular?',
            content: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'
          },
          {
            title:'What you need to know to use angular efficiently?',
            content:'typescript, javascript, Object oriented programming, Promises oriented programming, Asynchronous programming, Basic design patterns',
          },
          {
            title: 'Which design patterns are commonly used with angular?',
            content: 'The most common design pattern is Redux, is really a fairly simple design pattern: all your "write" logic goes into a single function, and the only way to run that logic is to give Redux a plain object that describes something that has happened.'
          },
          {
            title: 'Good practices with angular',
            content: 'if we want to have good practices, i recommend to use LIFT, LIFT helps us find and understand our code and files quickly. If you feel that it takes a long time to start working once your editor is open, perhaps the way in which you structure your project is not the one indicated. But how can we know which is the best structure for our projects?'
          }
        ],
        audio: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/angular.mp3?alt=media&token=5f938607-1e24-4b26-abab-28cb5b535272',
        video:'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/angular.mp4?alt=media&token=0148771a-f143-43c3-a9ab-454006137848'
      },
      {
        id: 2,
        name: 'Flutter framework',
        imagePath: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/banner_flutter.png?alt=media&token=4167e245-d6a6-4bc1-b266-9597bc3b51b9',
        imageCard: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/card_flutter.png?alt=media&token=b83c402a-c0bf-4699-b9f3-da24af89c946',
        userItinerarySummary: 'Day 1: 9AM - 1:30PM',
        tourPackageName: 'Standard Package',
        facts: [
          { title: 'Whats is flutter?', content: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.' },
          {
            title: 'Advantages of using flutter',
            content: 'Fast Development, Expressive and Flexible UI, Native Performance'
          },
          {
            title: 'What you need to know to use Flutter efficiently?',
            content: 'dart, which is the language that flutter is based on and media querys, to learn the size of the current media, for exapmple the window containing your app'
          },
        ],
        audio: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/flutter.mp3?alt=media&token=4910e602-17bb-4595-8c42-baa384f02ed6',
      },
      {
        id: 3,
        name: 'Data science',
        imagePath: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/banner_data.png?alt=media&token=3b4d68ab-ed3b-4611-bdaa-ea261b19895d',
        imageCard: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/data_card.png?alt=media&token=d0a001bc-2492-409a-9011-cefed07a5681',
        userItinerarySummary: 'Day 1: 2PM - 3:30PM',
        tourPackageName: 'Standard Package',
        facts: [
          {
            title: 'What is data science?',
            content: 'Data science, also known as data-driven science, is an interdisciplinary field about scientific methods, processes, and systems to extract knowledge or insights from data in various forms, either structured or unstructured, similar to data mining.'
          },
          {
            title: 'WHAT IS NOT?',
            content: 'Machine Learning is not a branch of Data science. Machine Learning originated from Artificial Intelligence. Data science is only using ML as a tool. The reason is that it produces amazing and autonomous results for specific tasks\nIt’s not the salvation of companies that never measured anything and now want to get insights from their data. “Garbage in, garbage out” Data science will be as good as the data generated on the following years.\nJust present data using some Excel charts without any insight about the data.'
          },
          {
            title: 'Whats is a data scientist?',
            content: 'data scientist, is the person who connects the dots between the business world and the data world. Similarly, data science is the craft that a data scientist utilizes to make this happen.'
          },
          {
            title: 'What do i need to become in data scientist?',
            content: 'Statistics: learn about the types of data you`ll encounter, types of averages, variance, standard deviation, correlation, and more.\nData visualization: learn about why we need to visualize our data, and the different ways of doing it (1 variable graphs, 2 variable graphs and 3 variable graphs.)\nProgramming: learn about why programming helps us with data science including the ease of automation and recommended Python libraries for you to get started with data science.'
          }
        ],
        audio: 'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/dataS.mp3?alt=media&token=1372d9bd-0724-4692-95a5-608b89e987a6',
        video:'https://firebasestorage.googleapis.com/v0/b/todoapp-ecfd6.appspot.com/o/dts.mp4?alt=media&token=2de3bc91-2d06-4ad5-a6c0-495aa0eddc0d'
      }
    ],
  }
  $posts = new BehaviorSubject<any>(this.posts);

  constructor() { }

  getPost(id: number) {
    let index = this.posts.posts.findIndex(x => x.id == id);
    return this.posts.posts[index];
  }
}
