// Entry for make.fun's "One Line, Big Laugh" bounty: a single joke
// line. This one is about a smart fridge that has learned to judge: asked
// for a midnight snack, it shows a graph of your declining willpower and
// locks itself for your own good. Running this prints the joke, and nothing else.

/** The joke: the request, the graph, the lock. */
function jokeLine(): string {
  const request = "I asked my smart fridge for a midnight snack";
  const graph = "and it showed me a graph of my willpower declining,";
  const lock = "then locked itself for my own good.";
  return `${request} ${graph} ${lock}`;
}

console.log(jokeLine());
