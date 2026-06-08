---
title: "Reflexion — What Happens When AI Learns to Reflect on Its Mistakes?"
date: "2026-06-01"
excerpt: "Language agents learned how to reason. They learned how to act. But they still struggled to learn from experience. Reflexion attempted to solve that problem through a surprisingly simple mechanism: self-reflection. And it actually worked."
tags: ["paper-review"]
lang: "en"
---

In earlier articles, we explored the origins of Reflexion and the concept of Verbal Reinforcement Learning.

Language agents had learned how to reason.

They had learned how to act.

But they still struggled to learn from experience.

Reflexion attempted to solve that problem through a surprisingly simple mechanism: self-reflection.

The natural next question is:

**Did it actually work?**

The answer, according to the experiments, was yes.

And perhaps more importantly, it worked without retraining the model.

---

## HumanEval — Can Reflection Improve Code Generation?

One of the most important evaluations in the paper was HumanEval.

HumanEval is a benchmark designed to measure a model's ability to generate correct code from natural language descriptions.

A typical problem might look something like this:

```python
Write a function that returns the factorial of n.
```

At first glance, the task appears simple.

In practice, however, many solutions fail because of missing edge cases, incorrect assumptions, or logical errors.

For example, an LLM might generate:

```python
def factorial(n):
    return n * factorial(n - 1)
```

The code looks reasonable.

Yet it contains a critical flaw.

There is no base case.

The function will recurse forever.

A traditional generation pipeline would simply try again.

Reflexion adds an additional step.

After failure, the model is asked to analyze its mistake.

A reflection might look like:

> I forgot to include the base case for the recursive function.
>
> The function needs a stopping condition when n equals zero.

The next attempt becomes:

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

Now the solution passes.

The important point is not the simplicity of the example.

The important point is that the model's parameters never changed.

The improvement came entirely from reflection.

The system effectively transformed failure into guidance.

Across HumanEval tasks, this process consistently improved performance.

The model became better not because it had learned new programming knowledge, but because it became better at applying knowledge it already possessed.

---

## ALFWorld — Learning Through Interaction

Perhaps the most interesting results appeared in ALFWorld.

ALFWorld is an interactive environment where an agent must perform tasks by exploring and manipulating objects.

For example:

```text
Go to the kitchen.
Open the refrigerator.
Find an apple.
Place the apple on the table.
```

To humans, this seems trivial.

To an AI agent, it is surprisingly difficult.

The agent must:

- Explore the environment
- Remember previous observations
- Decide what to do next
- Avoid repeating ineffective actions

Without reflection, agents often become trapped in inefficient loops.

For example:

```text
Open drawer.
Nothing useful found.

Open drawer again.
Nothing useful found.

Open drawer again.
Nothing useful found.
```

The agent has technically acted.

But it has not learned.

Reflexion introduces a reflection step.

After failure, the model might generate:

> I already searched the drawer and found nothing.
>
> Next time I should investigate other storage locations.

The reflection changes future behavior.

Instead of repeating the same action, the agent explores new possibilities.

This represents something important.

The system is no longer merely generating responses.

It is modifying its strategy based on experience.

In many ways, this begins to resemble how humans approach problem solving.

---

## HotPotQA — Can Reflection Improve Reasoning?

Reflexion was not limited to programming or interactive environments.

The researchers also tested it on reasoning tasks.

One of the most challenging benchmarks was HotPotQA.

HotPotQA requires multi-hop reasoning.

The answer cannot usually be found in a single sentence or document.

Instead, the model must connect information from multiple sources.

For example:

```text
Person A was born in which city?
```

The answer may require:

- Reading one document about Person A
- Finding a related historical event
- Following a reference to another document
- Combining multiple pieces of information

This process creates many opportunities for error.

The model may:

- Follow the wrong chain of reasoning
- Misinterpret a fact
- Overlook a critical detail

Reflexion allows the model to analyze these failures.

A reflection might state:

> I confused the person's birthplace with their current residence.
>
> Next time I should verify temporal information before making conclusions.

The next attempt benefits from that insight.

Again, no retraining occurs.

Only the context changes.

Yet reasoning performance improves.

This was one of the strongest demonstrations that reflection can influence not only actions, but also thought processes.

---

## Why Does Reflection Work?

This is perhaps the most fascinating question raised by the paper.

Why should a short paragraph of self-analysis improve performance?

The researchers proposed an intriguing explanation.

Many failures do not occur because the model lacks knowledge.

Instead, they occur because the model fails to properly apply knowledge.

There is an important difference between:

- Not knowing
- Knowing but failing to use what you know

Humans experience this constantly.

We forget details.

We overlook instructions.

We make careless mistakes.

We know the answer but fail to access it at the right moment.

Large language models appear to suffer from similar limitations.

Reflection functions as a form of externalized metacognition.

It forces the model to explicitly identify:

- What went wrong
- Why it went wrong
- How it should behave differently

The reflection becomes a reminder. A guide. A warning.

Instead of creating new capabilities, Reflexion helps unlock capabilities that already exist.

This idea would become increasingly influential in later agent research.

---

## Is Reflexion Really Learning?

This question remains surprisingly controversial.

From a traditional machine learning perspective, the answer is often:

**Not exactly.**

The model's parameters remain unchanged.

No gradient updates occur.

No weights are modified.

By the strict definition of machine learning, nothing has been learned.

Yet another perspective exists.

Humans frequently improve without immediate biological rewiring.

We write notes.

Keep journals.

Record lessons learned.

Review mistakes.

And then perform better in the future.

Most people would consider that a form of learning.

Reflexion operates in a similar way.

The system accumulates experience externally and uses it to improve future decisions.

Whether one calls that "learning" may depend more on definitions than on behavior.

The paper intentionally embraces this ambiguity through the term:

**Verbal Reinforcement Learning**

The learning signal exists.

It simply takes the form of language rather than parameter updates.

---

## The Limitations of Reflexion

Although Reflexion was influential, it was never a complete solution.

Several limitations became apparent almost immediately.

**Reflection Quality Matters** — A reflection is only useful if it is correct. If the model misdiagnoses the cause of failure, improvement may never occur. For example, if the actual problem is a boundary condition error, but the reflection incorrectly concludes the algorithm itself is wrong, the next attempt will also fail. In some cases, reflection can even reinforce bad behavior.

**Memory Growth** — The second challenge is memory management. A handful of reflections is manageable. Hundreds are not. Thousands become overwhelming. Which reflections are important? Which should be forgotten? Which are relevant to the current task? How should memories be retrieved? Reflexion largely leaves these questions unanswered. Later research would focus heavily on solving them.

**No Long-Term Identity** — Reflexion improves local performance. It helps an agent avoid repeating mistakes. But it does not create a persistent identity. It does not maintain values. It does not manage long-term goals. It does not build a stable personality. Those challenges would become central topics in future agent research.

---

## What Reflexion Inspired

The true significance of Reflexion may not lie in its benchmark scores.

Its larger impact comes from the research directions it inspired.

**Generative Agents** — In 2023, Stanford researchers introduced Generative Agents. These agents possessed memory systems capable of recording experiences, reflecting on events, forming plans, and developing social behavior. The idea that experiences should be stored and reused can be traced directly back to concepts popularized by Reflexion. The focus shifted from isolated tasks toward persistent cognitive processes.

**Voyager** — Voyager extended these ideas into an autonomous Minecraft agent. Unlike traditional agents, Voyager continuously accumulated skills. It learned. Expanded its capabilities. Explored increasingly complex environments. Reflection became part of a broader system for long-term capability growth. Instead of merely storing lessons, Voyager transformed experience into reusable skills.

**AutoGPT and Autonomous Agents** — The AutoGPT movement popularized the concept of self-improving loops: Plan → Act → Evaluate → Improve. This cycle strongly resembles the logic underlying Reflexion. Many autonomous agent architectures inherited this structure either directly or indirectly.

**MemGPT** — Perhaps the most obvious descendant is MemGPT. Reflexion demonstrated the value of storing experiences. MemGPT addressed the next question: How should those experiences be managed? As memory grows, retrieval becomes essential. MemGPT introduced working memory, long-term memory, external storage, retrieval mechanisms, and hierarchical memory structures. In many ways, MemGPT can be viewed as a response to one of Reflexion's biggest weaknesses. Reflexion proved memory mattered. MemGPT explored how memory could scale.

---

## Reflexion from the Perspective of 2026

Looking back from 2026, Reflexion appears both correct and incomplete.

It was correct about several important things:

- Memory matters
- Experience matters
- Reflection matters
- Improvement can occur without retraining

These ideas remain central to modern agent architectures.

At the same time, Reflexion underestimated the complexity of long-term cognition.

Modern systems must address:

- Memory retrieval
- Memory compression
- Long-term planning
- Identity preservation
- Context management
- Persistent goals

Many of the most active areas of agent research today focus on exactly these challenges.

For this reason, Reflexion is best understood not as a final solution, but as a beginning.

It marked a transition. Agent research started moving away from asking:

> How can AI reason?

Toward a deeper question:

> How can AI accumulate and use experience over time?

That shift continues to shape the field today.

---

## Final Thoughts

Reflexion was not as famous as the Transformer.

It did not create the public excitement generated by ChatGPT.

It did not introduce a revolutionary new model architecture.

Yet its influence has proven remarkably durable.

The paper introduced a simple but powerful idea:

**An AI system should not merely act. It should reflect.**

Language models learned how to reason.

Then they learned how to act.

Reflexion helped them learn how to examine their own failures.

That seemingly small step helped lay the foundation for a new generation of agent systems.

If ReAct marked the beginning of action-oriented AI,

then Reflexion marked the beginning of experience-oriented AI.

And much of modern agent research still follows the path that it helped establish.

---

## Paper

**Reflexion: Language Agents with Verbal Reinforcement Learning**

Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, Shunyu Yao

2023

https://arxiv.org/abs/2303.11366

---

## Next Article

If Reflexion gave AI the ability to reflect on its own failures, then an earlier paper called **ReAct** gave AI something equally important: the ability to act.

Before ReAct, language models primarily answered questions.

ReAct introduced a new loop: think, act, observe, and think again.

That simple idea helped transform language models from passive chatbots into active agents.

Why is ReAct often considered one of the starting points of today's AI agent revolution?

In the next article, we will explore the paper that helped turn LLMs into agents.


---

## Acknowledgement

Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., & Yao, S. (2023). **Reflexion: Language Agents with Verbal Reinforcement Learning.** *Advances in Neural Information Processing Systems*, 36. [arXiv:2303.11366](https://arxiv.org/abs/2303.11366)