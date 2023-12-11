import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModalModule ,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

//Service
import { UserService } from './service/user.service';
import { User } from './interface/user';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbPaginationModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-17-REST-HTTP';
  USERS: User[] = [];
  users: User[] = [];
  page: number = 1;
  pageSize: number = 4;
  collectionSize: number = 0; 
  constructor(private userService: UserService) {
    // this.onGetUsers();
  }

  ngOnInit(): void {
    // this.onUpdateUser(this.user)
    this.onGetUsers();
    this.refreshUsers();
    // this.onGetUser(4)
    // this.onCreateUser(this.user)
    // this.onGetText();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe({
      next: (res: User[]) => {
        this.USERS = res;
        this.collectionSize = this.USERS.length;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Get all user request is complete.'),
    });
  }

  onGetUser(userId: number): void {
    this.userService.getUser(userId).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Get a single user requst is complete.'),
    });
  }

  onCreateUser(user: User): void {
    this.userService.createUser(user).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Create user request is complete.'),
    });
  }

  onUpdateUser(user: User): void {
    this.userService.updateUser(user).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Update user request is complete.'),
    });
  }

  onPatchUser(user: any): void {
    this.userService.patchUser(user).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Patch user request is complete.'),
    });
  }

  onGetText(): void {
    this.userService.getText().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Get Text request is complete.'),
    });
  }

  refreshUsers() {
		this.users = this.USERS.map((user, i) => ({ id: i + 1, ...user })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}
