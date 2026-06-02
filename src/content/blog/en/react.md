---
title: "ReAct - Why Did AI Begin to Act?"
date: "2026-06-02"
excerpt: "ChatGPT looked intelligent. But was it doing anything more than generating text? Researchers noticed a crucial gap: AI could answer questions, but it could not act on them. That limitation changed everything."
lang: "en"
---

## Before and After ChatGPT

November 2022.

When ChatGPT was released, many people felt as if artificial intelligence had suddenly become intelligent.

It could answer questions.

Write essays.

Create programs.

Summarize.

Translate.

Debate.

It felt almost like talking to a human being.

But researchers were paying attention to a different problem.

ChatGPT looked extremely intelligent.

But was it really doing anything more than generating text?

That question remains unresolved even today.

Yet around 2022, researchers were facing a more practical limitation.

---

AI could answer.

But it could not act.

---

That was one of the biggest limitations of large language models at the time.

---

## Language Models Were Not Seeing the World

For example, if you asked, "What is the capital of France?" the model could answer: "Paris." That information existed in its training data.

But what if you asked: "What is today's USD/JPY exchange rate?" The model would struggle. It did not know what had happened after training. It could not observe what was happening in the real world.

In other words, LLMs possessed enormous knowledge, but they were disconnected from reality.

Humans are different. When we do not know something, we look it up. We verify it. We search. We experiment. We observe. And then we think based on the result.

Intelligence is not only thinking.

It is also interaction with the world.

---

Around 2022, many researchers were beginning to share this concern.

Large language models had become remarkably capable. But their intelligence seemed strangely closed. They were like geniuses who had memorized every book in a library. They possessed vast knowledge. They could perform complex reasoning. Yet they had no way to know what was happening outside those books. They could not investigate on their own. They could not verify information.

That was the decisive difference between LLMs and human intelligence.

---

## The Chain-of-Thought Revolution

Just before ReAct appeared, AI research experienced a major breakthrough.

**Chain-of-Thought.**

In 2022, researchers at Google reported a surprising discovery.

Simply asking a model to write out its intermediate reasoning steps significantly improved its performance.

For example:

Q: Roger has 5 apples. He buys 3 more and eats 2. How many are left?

**Standard answer:** 6

**Chain-of-Thought:**
Roger has 5 apples.
He buys 3 more, bringing the total to 8.
He eats 2, leaving 6.
The answer is 6.

The idea was simple. Yet the effect was dramatic.

Mathematics. Logical reasoning. Commonsense reasoning. Complex question answering. Performance improved across many benchmarks.

Researchers became excited. Had AI truly begun to think? The results certainly made it feel that way.

In fact, Chain-of-Thought remains one of the foundations of nearly every modern reasoning model. OpenAI's o-series. Claude's Extended Thinking. Gemini's Thinking Mode. The names differ. But at their core, they all extend the same idea: generate intermediate reasoning steps.

Its influence on modern AI cannot be overstated.

---

## The Limit of Thinking Alone

However, Chain-of-Thought had a fundamental limitation.

It could only think.

For example, "What is the current CEO of Apple?" could be answered. That information existed in the training data.

But: "What new product did Apple announce yesterday?" was a different story.

No matter how long the model thought, unknown information would never magically appear.

Furthermore, reasoning can be wrong. Hallucinations occur. Calculation errors happen. Thinking alone cannot verify itself.

What would a human do?

Search. Use a calculator. Check documentation. Ask another person.

In other words, humans combine thinking and action. That is why accuracy improves.

At the time, LLMs were missing this crucial element: action.

---

## The Birth of ReAct

In 2022, researchers from Princeton University and Google Research proposed a remarkably simple idea.

Humans do not merely think.

They act.

So why not allow AI to act as well?

That idea became **ReAct**.

The full title of the paper was: **ReAct: Synergizing Reasoning and Acting in Language Models**

The name combines Reasoning and Acting.

The core concept was surprisingly straightforward.

Traditional LLMs followed a pattern like this:

Question → Reason → Answer

ReAct introduced an entirely new loop.

Think. Act. Observe. Think again.

The structure closely resembles how humans solve problems.

---

## Thought, Action, and Observation

The most important innovation of ReAct was not a massive new model.

It was not a new learning algorithm.

It was a prompting structure.

The model was encouraged to reason in the following format:

Thought: What should I do first?
Action: Perform an action
Observation: Receive the result

Then, it would think again based on what it observed.

For example, if asked: "What is the capital of the country where Christopher Nolan was born?" the process might look like this:

Thought: First, I should look up Christopher Nolan.
Action: Search[Christopher Nolan]

Observation: Christopher Nolan was born in the United Kingdom.

Thought: Now I should find the capital of the United Kingdom.
Action: Search[United Kingdom]

Observation: Capital: London

Answer: London

Today this appears obvious. But at the time, it was revolutionary.

For the first time, an AI system was reasoning while interacting with the outside world.

---

## The Prototype of the AI Agent

Today, the term "AI Agent" appears everywhere.

Claude Code. Cursor. OpenAI Agents. OpenHands. CrewAI. LangGraph. AutoGPT.

The names and implementations differ. But if we examine them closely, most share the same fundamental loop.

Goal → Think → Act → Observe → Think → Act → Observe → Goal Complete

This structure is precisely what ReAct demonstrated.

Modern agents appear complex. Multi-agent systems. Long-term memory. Tool usage. Code execution. Planning. Task decomposition.

Yet at the center, the same loop remains: Thought → Action → Observation

ReAct was not simply another research paper.

It created the prototype for an entirely new category of AI systems.

---

## Why ReAct Mattered

The significance of ReAct was not merely improved performance.

It changed how researchers thought about intelligence itself.

Before ReAct, the dominant question was: "How can we make models think better?"

Larger models. More data. Better reasoning. More sophisticated architectures.

ReAct pointed in a different direction.

**Intelligence is interaction with the world.**

Thinking alone is not enough.

An intelligent system must act, observe the outcome, and use that outcome to decide what to do next.

This idea would go on to influence nearly every branch of agent research that followed. It became one of the key starting points of the modern AI agent movement.

---

## Did ReAct Actually Work?

The idea behind ReAct was remarkably simple. Think. Act. Observe. Think again.

But in research, a clever idea is not enough. The real question is whether it actually improves performance. Does it solve problems more effectively than previous approaches? Can it consistently outperform existing methods?

To answer those questions, the researchers evaluated ReAct across multiple benchmarks.

The results turned out to be far more significant than many expected.

---

## HotpotQA - Connecting Multiple Pieces of Knowledge

One of the most important evaluations was **HotpotQA**.

HotpotQA is not a simple factual question-answering benchmark. It requires combining multiple pieces of information before arriving at an answer.

For example: "What is the capital of the country where a particular film director was born?"

Answering this requires several steps. First, identify the director. Then determine their country of birth. Finally, find the capital of that country.

Traditional language models often attempted to answer directly from memory. As a result, they frequently made mistakes in intermediate reasoning or invented facts that did not exist.

ReAct approached the problem differently. It gathered information step by step. Each observation informed the next action.

Instead of pretending to know the answer, it searched for evidence. This process looked far more like how humans solve problems. When humans encounter uncertainty, they investigate. ReAct did the same.

---

The results were clear. ReAct consistently outperformed Chain-of-Thought prompting alone.

The reason was straightforward. It stopped guessing. Instead, it looked things up.

---

## FEVER - Fighting Hallucinations

Another important benchmark was **FEVER**.

Fact Extraction and VERification. As the name suggests, it focuses on fact-checking.

A model is given a claim and must determine whether it is supported by evidence.

For example: "The Eiffel Tower is located in Berlin."

Humans immediately recognize this as false. But language models can be surprisingly unreliable on tasks like this. Even when the relevant knowledge exists within the model, retrieval and application are not always reliable.

---

ReAct introduced a different strategy. Rather than immediately generating an answer, it searched for evidence. It consulted external information. It gathered supporting documents. Only then did it reach a conclusion.

---

This represented an important shift. The model was no longer acting purely as a text generator. It was behaving more like an investigator.

In many ways, this idea foreshadowed later developments such as retrieval-augmented generation (RAG) and search-integrated AI systems.

---

## ALFWorld - Can AI Operate in an Environment?

One of the most fascinating aspects of the ReAct paper was that it extended beyond question answering.

The researchers wanted to know whether language models could interact with environments.

To test this, they used **ALFWorld**.

---

ALFWorld is a household simulation environment. It contains kitchens. Refrigerators. Microwaves. Cabinets. Drawers. And many different objects.

---

Suppose the task is: "Put the apple in the refrigerator."

For a human, this is simple. For an AI agent, however, it requires multiple steps. Find the apple. Pick it up. Locate the refrigerator. Open the refrigerator. Place the apple inside.

---

Many things can go wrong. The agent may enter the wrong room. It may pick up the wrong object. It may fail to find the refrigerator.

---

ReAct allowed the model to adjust its behavior based on observations. If an action failed, the next thought could take that failure into account. This ability to react to environmental feedback was critical.

---

The significance extends beyond virtual worlds. The same principle appears in robotics. Observe the environment. Take an action. Evaluate the outcome. Adjust behavior.

ReAct demonstrated that language models could participate in this loop.

---

## WebShop - Teaching AI to Shop Online

Another particularly interesting benchmark was **WebShop**.

As the name suggests, it simulates an online shopping environment.

---

Imagine a user gives the following request: "Find a waterproof blue hiking backpack."

The agent must browse products. Search through listings. Read descriptions. Compare options. Evaluate reviews. And eventually choose the most appropriate item.

---

This sounds remarkably familiar today. Modern browser-based agents perform very similar tasks. In fact, many contemporary AI agents are essentially solving a more advanced version of the same problem.

---

ReAct achieved significantly better performance than previous methods. Again, the reason was simple. It interacted with information instead of inventing an answer. It investigated before responding.

---

## A New View of Intelligence

The most important contribution of ReAct was not a benchmark score.

It was a conceptual shift.

---

Before ReAct, intelligence was often viewed primarily as reasoning ability. Larger models. More parameters. More data. More sophisticated reasoning.

ReAct introduced a different perspective.

**Intelligence is interaction with an environment.**

---

Thinking is only one part of intelligence.

An intelligent system must also act. Observe. Adapt. And try again.

---

This perspective would become increasingly influential throughout the next wave of AI research.

---

## The Road to AutoGPT

In 2023, the AI agent boom began.

One of the most visible examples was **AutoGPT**.

AutoGPT followed a structure that now feels familiar:

Set a goal. → Create a plan. → Use tools. → Evaluate results. → Update the plan. → Repeat.

---

At its core, this was ReAct.

The implementation was larger. The ambitions were bigger. But the fundamental loop remained unchanged.

---

AutoGPT did not emerge from nowhere. It was built on the conceptual foundation established by ReAct.

---

## The Connection to Claude Code and Cursor

By 2025 and 2026, AI agents had evolved significantly.

Claude Code. Cursor. OpenAI Agents. OpenHands. And many others.

These systems can write code. Execute programs. Inspect logs. Diagnose failures. Modify implementations. And repeat the process.

---

Yet beneath all the complexity, the same pattern remains.

Thought. → Action. → Observation. → Thought.

---

When Claude Code reads an error log, identifies a bug, writes a fix, and executes the program again, it is following the same basic structure introduced by ReAct.

---

Modern agents may appear dramatically more sophisticated. But many of them can still be understood as increasingly powerful versions of the same underlying idea.

---

## The Limits of ReAct

Despite its importance, ReAct had a major limitation.

---

It could act.

But it could not learn.

---

This distinction is crucial.

Suppose an agent fails at a task. A human remembers that failure. The next attempt is informed by previous experience. Growth becomes possible.

---

ReAct did not work that way.

Once a task ended, the experience disappeared.

The next task began from scratch.

---

The agent could repeat the same mistake. Perform the same search. Follow the same unsuccessful path. Over and over again.

---

It could reason. It could act. It could observe. But it could not truly improve over time.

---

This limitation revealed the next major challenge in agent research.

How can an agent learn from experience?

How can knowledge persist across tasks?

How can an agent accumulate skills rather than repeatedly rediscover them?

---

These questions would shape the next generation of research.

---

## What ReAct Left Behind

ReAct is not as famous as Transformer.

It did not become a cultural phenomenon like ChatGPT.

Yet it remains one of the most important papers in the history of AI agents.

---

Because it marked a fundamental transition.

Language models stopped being systems that merely generated answers.

They became systems capable of acting within an environment.

---

Think. Act. Observe. Think again.

---

Even today, many modern agent frameworks continue to operate on this foundation.

The tools are different. The scale is larger. The capabilities are more advanced. But the core loop remains the same.

---

And once researchers demonstrated that agents could act, the next challenge became obvious.

Acting was not enough.

Agents needed to learn.

They needed to grow.

They needed to accumulate experience.

---

One of the most influential answers to that challenge would emerge in 2023, inside the blocky world of Minecraft.

Its name was **Voyager**.

---

## Paper Information

Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2022). **ReAct: Synergizing Reasoning and Acting in Language Models**. https://arxiv.org/abs/2210.03629

---

## Next Article

ReAct gave AI the ability to reason and act.

But there was still a problem.

The agent could perform tasks, yet it could not truly learn from experience. Even if it learned how to chop wood today, that knowledge disappeared when the next task began.

An agent that forgets everything cannot really grow.

In 2023, researchers at NVIDIA conducted a fascinating experiment inside the world of Minecraft.

They placed an AI agent into the environment, gave it goals, and allowed it to learn on its own.

The result was **Voyager**.

Voyager accumulated experiences as reusable skills, expanded its capabilities over time, and continuously explored increasingly complex parts of the world.

Why is this research often considered one of the foundations of long-horizon AI agents?

In the next article, we will explore **Voyager**, the paper that gave AI the ability to grow through experience.
