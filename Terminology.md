# Async terminology

- **Concurrency**
- **Parallelism** 
- **Asynchrony**
- **Multithreading**


## Concurrency
> the fact of two or more events or circumstances happening or existing at the same time.

[google definitions](https://www.google.com/search?q=what+is+concurrency)

Concurrency means executing multiple tasks at the same time, _but not necessarily simultaneously._
This is just a concept.

## Parallelism
> the use of parallel processing.

[google definitions](https://www.google.com/search?q=what+is+parallelism)

`Parallelism` is a specific kind of concurrency where tasks are really executed simultaneously. In computer science, parallelism can
only be achieved in multi core environments.  

[stackoverflow](https://stackoverflow.com/a/62657337/2319865)

## Asynchrony
> the quality or state of being asynchronous : absence or lack of concurrence in time

[webster](https://www.merriam-webster.com/dictionary/asynchrony#:~:text=Definition%20of%20asynchrony,lack%20of%20concurrence%20in%20time)

> Asynchronous methods aren't directly related to the previous two concepts, asynchrony is used to present the impression of concurrent or parallel tasking 
> but effectively an asynchronous method call is normally used for a process that needs to do work away from the current application 
> and we don't want to wait and block our application awaiting the response.  

[stackoverflow](https://stackoverflow.com/a/4844774/2319865)

## Multithreading
> a technique by which a single set of code can be used by several processors at different stages of execution.

[google definitions](https://www.google.com/search?q=what+is+multithreading)

## Summary

![sync vs multi-threaded vs async vs async multi-threaded](https://i.stack.imgur.com/lD550.png)