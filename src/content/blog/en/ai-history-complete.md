---
title: "The Long Road to LLMs: A Complete History of Artificial Intelligence"
date: "2026-05-28"
excerpt: "From logic machines and expert systems through two AI winters to the Transformer revolution — the full arc of a 70-year journey that most people only caught the ending of."
lang: "en"
---

When ChatGPT arrived in late 2022, most people experienced it as a sudden rupture — as if artificial intelligence had appeared from nowhere. But the system they were interacting with was the product of nearly seventy years of research, failure, revival, and accumulation.

This is the complete story of how we got here.

## The Full Timeline

| Year | Event | Significance |
|------|-------|-------------|
| 1950 | Turing publishes "Computing Machinery and Intelligence" | Defines the field's founding question |
| 1956 | Dartmouth Conference | The term "Artificial Intelligence" is coined |
| 1957 | Rosenblatt develops the Perceptron | First trainable neural network |
| 1966 | ELIZA created at MIT | First chatbot; ELIZA effect discovered |
| 1969 | Minsky & Papert publish *Perceptrons* | Exposes limits of early neural nets; First AI Winter begins |
| 1970s–80s | First AI Winter | Funding collapses; expectations reset |
| 1980s | Expert Systems boom | MYCIN, XCON; billion-dollar industry |
| 1986 | Rumelhart, Hinton & Williams publish backpropagation | Foundation for modern deep learning |
| 1987 | Expert Systems collapse | Second AI Winter begins |
| 1997 | IBM Deep Blue defeats Kasparov | Peak of symbolic/search AI |
| 1997 | LSTM introduced | Addresses vanishing gradient for sequences |
| 2006 | Hinton's deep belief networks | Sparks the deep learning revival |
| 2011 | IBM Watson wins Jeopardy! | Apotheosis of retrieval-based AI |
| 2012 | AlexNet wins ImageNet | Deep learning goes mainstream |
| 2014 | Attention mechanism (Bahdanau et al.) | Breaks the fixed-length bottleneck |
| 2014 | GANs introduced (Goodfellow et al.) | New paradigm for generative models |
| 2015 | Google deploys Neural Machine Translation | NMT at production scale |
| 2017 | "Attention Is All You Need" | The Transformer is born |
| 2018 | GPT-1 · BERT | Pre-training at scale begins |
| 2019 | GPT-2 | Demonstrates coherent long-form generation |
| 2020 | GPT-3 | Emergence at 175B parameters |
| 2022 | ChatGPT · Stable Diffusion | The public AI moment |

---

## Part I: The Age of Optimism (1950–1969)

### The Turing Test and the Birth of a Field

In 1950, Alan Turing asked a question that would define the next century of computer science: *Can machines think?*

His paper "Computing Machinery and Intelligence" proposed what he called the Imitation Game — now known as the Turing Test. Rather than defining machine intelligence philosophically, Turing proposed a behavioral standard: if a machine could converse with a human for five minutes without the human detecting it was a machine, it should be considered intelligent.

> *"I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted."*
>
> — Alan Turing, "Computing Machinery and Intelligence" (1950)

He was off by about twenty years, but not wrong.

### The Dartmouth Conference (1956)

Six years later, a group of researchers gathered at Dartmouth College for a summer workshop that would give the field its name. John McCarthy, Marvin Minsky, Claude Shannon, and others proposed that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."

The optimism was extraordinary. McCarthy predicted that "a machine as intelligent as a human" could be built within a generation. The funding followed the optimism. So did the disappointment.

### The Perceptron: Neural Networks Begin

In 1957, Frank Rosenblatt developed the Perceptron — an algorithm that could learn to classify inputs by adjusting numerical weights. It was the conceptual ancestor of every neural network that followed.

Then, in 1969, Minsky and Papert published a book-length proof that the Perceptron could not solve certain fundamental classes of problems — including the simple XOR function. The excitement evaporated.

---

## Part II: The First AI Winter (1970s–1980s)

### The Collapse of Early Promises

The gap between the promises of the 1950s and what AI systems could actually deliver became impossible to ignore by the early 1970s. The Lighthill Report (1973) concluded that AI had failed to produce "any general methods" and recommended significant cuts to research funding.

The field entered the First AI Winter — a period of reduced funding, diminished expectations, and quiet, grinding work by a shrinking community of researchers who still believed.

### ELIZA: The Illusion of Understanding

Before the winter set in, ELIZA (1966), built by Joseph Weizenbaum at MIT, demonstrated something important — and troubling.

ELIZA simulated a psychotherapist by pattern-matching user inputs and reflecting them back as questions. It had no understanding of language whatsoever. Yet users routinely became emotionally attached to it.

Weizenbaum was disturbed by how readily people projected understanding onto a system he knew was purely mechanical. This became known as the **ELIZA effect** — the human tendency to assume understanding where none exists. It has not gone away.

### Backpropagation: The Quiet Revival

While the field contracted, a critical development occurred. In 1986, Rumelhart, Hinton, and Williams published a paper demonstrating that multi-layer neural networks could be trained effectively through backpropagation:

> *"We describe a new learning procedure, back-propagation, for networks of neuron-like units... The procedure repeatedly adjusts the weights of the connections in the network so as to minimize a measure of the difference between the actual output vector of the network and the desired output vector."*
>
> — Rumelhart, Hinton & Williams, "Learning representations by back-propagating errors" (1986)

This paper would eventually be recognized as one of the most consequential in computing history. At the time, it landed in a field with no money and damaged credibility, and was largely ignored.

---

## Part III: Expert Systems and the Second Winter (1980s–1990s)

### The Expert Systems Boom

In the 1980s, AI found a new direction: expert systems. Rather than building general intelligence, researchers encoded domain knowledge — medical diagnosis, equipment configuration, geological survey — into rule-based systems.

The approach worked within limits. MYCIN could diagnose bacterial infections with accuracy comparable to physicians. XCON configured computer systems, saving millions annually. By the mid-1980s, expert systems were a billion-dollar industry.

### The Collapse

The fundamental problem was brittleness. Expert systems required enormous amounts of hand-crafted rules, could not handle inputs outside their domain, and could not learn. When the custom hardware built for them was overtaken by cheaper general-purpose workstations, the business case collapsed. The Second AI Winter began in 1987.

---

## Part IV: The Return of Neural Networks (1990s–2010s)

### Deep Blue: Narrow Intelligence at its Apex

In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov — the first time a computer had beaten a reigning world champion under standard tournament conditions.

It was a landmark, but also an illustration of the paradigm's limits. Deep Blue could search 200 million chess positions per second. It had no understanding of chess in any meaningful sense, and could not transfer any capability to any other domain. Narrow intelligence, taken to its extreme, remained narrow.

### The Deep Learning Revival (2006–2012)

Geoffrey Hinton, who had continued working on neural networks through both winters, published a 2006 paper demonstrating that deep networks could be trained effectively through greedy layer-wise pretraining.

The watershed moment came in 2012, when AlexNet won the ImageNet challenge by a margin so large it was initially assumed to be a mistake:

> *"Our results show that a large, deep convolutional neural network is capable of achieving record-breaking results on a highly challenging dataset using purely supervised learning."*
>
> — Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep Convolutional Neural Networks" (2012)

The error rate dropped from 26% to 16% in a single year. The field transformed overnight.

---

## Part V: The Transformer Revolution (2014–Present)

### The Attention Mechanism (2014)

While deep learning transformed computer vision, a parallel effort addressed machine translation. Recurrent neural networks processed language sequentially, causing early context to be lost in longer sentences. In 2014, Bahdanau, Cho, and Bengio proposed a solution:

> *"We conjecture that the use of a fixed-length vector is a bottleneck in improving the performance of this basic encoder–decoder architecture, and propose to extend this by allowing a model to automatically (soft-)search for parts of a source sentence that are relevant to predicting a target word."*
>
> — Bahdanau et al., "Neural Machine Translation by Jointly Learning to Align and Translate" (2014). [arXiv:1409.0473](https://arxiv.org/abs/1409.0473)

Rather than compressing an entire sentence into a fixed vector, Attention let the model dynamically reference any part of the input at any point during generation. Translation quality improved dramatically.

### "Attention Is All You Need" (2017)

Three years later, a team at Google took the insight to its conclusion:

> *"We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely."*
>
> — Vaswani et al., "Attention Is All You Need" (2017). [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

The Transformer eliminated sequential processing entirely. Every word could attend to every other word simultaneously. This made the architecture extraordinarily well-suited to GPU parallel computation — meaning training became faster, the entire internet became viable as training data, and model scale could grow into the hundreds of billions of parameters.

### Emergence: The Capability No One Taught

Researchers trained these large Transformers on one task only — predicting the next word — on as much text as possible. At a certain scale, something unexpected happened. Capabilities appeared that had never been explicitly taught: conversation, summarization, code generation, multi-step reasoning.

> *"We demonstrate that scaling up language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches."*
>
> — Brown et al., "Language Models are Few-Shot Learners" (GPT-3, 2020). [arXiv:2005.14165](https://arxiv.org/abs/2005.14165)

This phenomenon — **emergence** — remains one of the most debated questions in AI research. No one fully understands why capabilities appear at scale that were never trained for.

### The Retrofitted Interface

GPT was originally a text completion engine. To create the conversational interface billions now use, three layers were added:

1. **Instruction Tuning** — fine-tuning the model to follow instructions
2. **RLHF** — training the model to produce responses human evaluators preferred
3. **Safety Alignment** — filtering harmful outputs

The conversational interface was retrofitted onto a translation-derived prediction engine.

---

## What the Retrofitting Left Out

Looking across seventy years of AI history, a pattern emerges: each generation was built to solve a specific, defined problem. And each time, certain things were not built in — because they were not required for the task at hand.

Modern LLMs gained the ability to converse. They were not given memory. They were not given the capacity to know you across time — not just what you said five minutes ago, but who you are across months and years of interaction.

Every session begins from zero. The ELIZA effect Weizenbaum warned about in 1966 is still operating — we project understanding, relationship, and continuity onto systems that, architecturally, have none of these things.

This is not a temporary engineering limitation. It is a structural consequence of how these systems were designed — and it points to something that, across seventy years of AI history, has never been built.

Ankina Lab is researching that missing piece: AI systems that don't just respond, but remember — and through memory, become genuine long-term intellectual partners rather than sophisticated prediction engines that reset with every session.

The translation machine became a mind by accident.
Memory, we believe, can be made intentional.
