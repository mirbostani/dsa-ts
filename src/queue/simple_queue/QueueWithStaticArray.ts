 export class QueueWithStaticArray<T> {
   private queue: T[];
   private capacity: number;
   private front: number;
   private rear: number;
   private size: number;

   constructor(capacity: number) {
     this.capacity = capacity;
     this.queue = new Array<T>(this.capacity);
     this.front = -1;
     this.rear = -1;
     this.size = 0
   }

   isEmpty(): boolean {
     return this.size === 0;
   }

   isFull(): boolean {
     return this.size === this.capacity;
   }

   enqueue(data: T): void {
     if (this.isFull()) {
       throw new Error("Enqueue to a full queue");
     }

     // First enqueue operation
     if (this.front === -1) this.front = 0;

     this.rear = (this.rear + 1) % this.capacity;
     this.queue[this.rear] = data;
     this.size++;
   }

   dequeue(): T | undefined {
     if (this.isEmpty()) {
       return undefined;
     }
     const data = this.queue[this.front];
     this.queue[this.front] = undefined as any;

     this.front = (this.front + 1) % this.capacity;
     this.size--;

     return data;
   }

   peek(): T | undefined {
     if (this.isEmpty()) {
       return undefined;
     }
     return this.queue[this.front];
   }

   getSize(): number {
     return this.size;
   }
 }
