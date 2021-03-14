import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent {

  model = {
    titile: "Text Interpolation",
    image: "angular1.jpg"
  }

  data: Data = { id: 100, name: "Hello Angular" }

  times(a: number, b: number): number {
    return a * b
  }

  array = ["javaScript", "TypeScript", "Angular"]

  item = "Component Item"
  header = "Component Header"
}

export interface Data {
  id: number
  name: string
}
