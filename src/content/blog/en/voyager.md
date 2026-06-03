---
title: "Voyager - Why Did AI Begin to Grow?"
date: "2026-06-03"
excerpt: "ChatGPT does not learn from experience. Knowledge from today's conversation disappears tomorrow. But in 2023, NVIDIA researchers changed that inside the Minecraft world. An AI began to explore on its own, acquire skills, and grow."
tags: ["paper-review"]
lang: "en"
---

## ChatGPT Does Not Learn

When ChatGPT was released at the end of 2022, it surprised the world.

For many people, it was the first time they had interacted with an AI system that could hold a meaningful conversation.

It could answer questions.

It could write essays.

It could explain complex topics.

It could even generate computer programs.

To many observers, it appeared as if artificial intelligence had finally crossed an important threshold.

For the first time, interacting with an AI felt less like using software and more like communicating with something intelligent.

Yet beneath this impressive capability lay a fundamental limitation.

A limitation that would become one of the central questions of modern AI agent research.

ChatGPT does not learn from experience.

If it discovers something useful during a conversation today, that knowledge is not automatically available tomorrow.

If it solves a difficult problem one hundred times, it does not become better at solving that problem the next day.

If it fails one thousand times, those failures are not accumulated into experience.

Every conversation begins from essentially the same starting point.

Of course, large language models contain enormous amounts of knowledge.

They have absorbed patterns from books, articles, websites, code repositories, and countless other sources during training.

But that knowledge is static.

It is knowledge acquired before deployment.

It is not knowledge continuously accumulated through lived experience.

Humans are different.

Every experience changes us.

Every success teaches us something.

Every mistake leaves a trace.

Every challenge expands our abilities.

Over time, we build a collection of skills that allows us to tackle increasingly complex problems.

If AI were ever going to function as a true long-term agent, researchers realized it would need similar capabilities.

An intelligent agent should be able to:

- Learn from experience
- Acquire reusable skills
- Build upon previous successes
- Expand its capabilities over time

The question was obvious.

> Could an AI accumulate experience and use it to become more capable?

One of the most influential attempts to answer that question was a research project called **Voyager**.

Published by NVIDIA researchers in 2023, Voyager placed an AI agent inside the world of Minecraft and allowed it to explore autonomously.

What happened next was remarkable.

The agent began setting its own goals.

It explored unfamiliar territory.

It acquired new skills.

It reused previous knowledge.

And over time, it appeared to become increasingly capable.

For many researchers, Voyager represented one of the clearest demonstrations that large language models could act as the foundation of a continually improving agent.

---

## Minecraft as a Laboratory for Intelligence

At first glance, Minecraft may seem like a strange choice.

Why would researchers interested in artificial intelligence choose a video game as their testing environment?

The answer becomes obvious once we look more closely at what Minecraft actually is.

Minecraft is not merely a game.

It is an open-ended world filled with resources, tools, dangers, opportunities, and long-term progression systems.

Players begin with nothing.

No equipment.

No shelter.

No resources.

No predefined path to success.

Everything must be acquired through exploration and action.

A player typically starts by gathering wood.

Wood is used to build tools.

Tools are used to gather stone.

Stone tools enable access to iron.

Iron enables stronger equipment.

Stronger equipment enables deeper exploration.

Deeper exploration reveals rarer resources.

Those resources unlock even more advanced capabilities.

Progress in Minecraft is fundamentally hierarchical.

Later abilities depend upon earlier abilities.

New opportunities emerge from previously acquired skills.

This structure makes Minecraft surprisingly similar to many real-world learning environments.

A chef cannot prepare a complex meal before learning basic knife skills.

A programmer cannot build advanced systems before understanding a programming language.

A scientist cannot conduct original research before learning fundamental concepts.

Human growth is cumulative.

Abilities build upon abilities.

Skills enable more skills.

Knowledge creates opportunities for acquiring new knowledge.

Minecraft captures this process in a way that is measurable, observable, and reproducible.

That makes it an ideal environment for studying whether an AI can grow over time.

---

## The Real Goal of Voyager

Many people mistakenly assume Voyager was simply trying to create an AI capable of beating Minecraft.

That was never the primary objective.

Traditional AI systems are usually designed around a clearly defined goal.

A chess engine attempts to win a game of chess.

A Go system attempts to win a game of Go.

A navigation system attempts to reach a destination.

The objective is specified in advance.

Success is easy to measure.

But the real world rarely works this way.

Humans do not spend their entire lives pursuing a single predefined objective.

We create new goals.

We develop new interests.

We discover new opportunities.

We change direction.

We adapt.

We explore.

A child learning about the world does not follow a fixed objective function.

Neither does a scientist pursuing discovery.

Neither does an entrepreneur building a company.

Human intelligence is deeply connected to the ability to generate new goals.

Voyager was designed around this idea.

Rather than pursuing a single endpoint, the agent would continuously identify new objectives and attempt to achieve them.

The researchers referred to this concept as **Open-Ended Exploration**.

The goal was not to finish.

The goal was to continue growing.

This distinction is crucial.

Many earlier AI systems were optimized for performance.

Voyager was optimized for expansion.

The difference may seem subtle, but it fundamentally changed the nature of the agent.

---

## The Limitation of Earlier Agents

Before Voyager, researchers had already made significant progress in agent design.

One of the most influential examples was ReAct.

ReAct introduced a powerful idea.

Instead of forcing language models to either think or act, it combined both processes into a single loop.

The model could reason about a situation.

Take an action.

Observe the result.

Reason again.

This represented an important step forward.

For the first time, language models could interact with external environments in a structured way.

Yet a major limitation remained.

Experience was still temporary.

Suppose an agent successfully learned how to find iron ore inside a cave.

The next time it encountered a similar situation, that experience was not necessarily available.

The model would effectively start from scratch.

It would repeat the reasoning process again.

Humans do not work this way.

Once we learn how to ride a bicycle, we do not relearn it every morning.

Once we learn a programming language, we do not rediscover its syntax every week.

Past experience becomes a resource.

Learning is fundamentally the process of converting experience into reusable capability.

Voyager set out to give agents exactly that ability.

---

## Voyager's First Breakthrough: The Skill Library

The most important innovation in Voyager was something called the **Skill Library**.

Rather than treating successful actions as temporary events, Voyager transformed them into reusable assets.

Whenever the agent successfully accomplished a task, the solution could be stored and reused later.

For example, suppose the agent learned how to gather wood efficiently.

That procedure could be saved.

The next time wood was required, the agent would not need to reason from first principles.

Instead, it could retrieve the previously successful skill.

In effect, the agent was building a library of capabilities.

This may sound simple.

But it represented a profound shift.

Instead of repeatedly solving the same problem, the agent could build upon previous achievements.

Experience became infrastructure.

Knowledge became cumulative.

The past became useful.

This was one of the first demonstrations of what continual capability expansion might look like for LLM-based agents.

---

## Why Skills Were Stored as Code

Perhaps the most interesting design decision in Voyager was the format chosen for memory.

The researchers did not store skills as plain text descriptions.

They stored them as executable code.

Why?

Because natural language is ambiguous.

A textual description of how to gather iron may be informative, but it still requires interpretation.

Code is different.

Code specifies exactly what should happen.

It is precise.

It is executable.

It can be reused directly.

The researchers were not interested in preserving descriptions of skills.

They wanted to preserve the skills themselves.

By storing executable procedures, Voyager effectively turned experience into reusable functionality.

This decision would become one of the most discussed aspects of the paper and would influence many later agent architectures.

---

## Learning from Failure

Accumulating skills is valuable.

Generating new goals is valuable.

But neither of those capabilities is sufficient on its own.

The real challenge appears when the agent fails.

Humans do not become capable because they succeed every time.

We become capable because we fail, analyze those failures, and adjust our behavior.

A child learning to walk falls countless times.

A programmer writes buggy code.

A scientist develops hypotheses that turn out to be wrong.

Failure is not the opposite of learning.

Failure is often the mechanism through which learning occurs.

This created a major challenge for Voyager.

Large language models are not perfect.

Generated code is frequently incorrect.

Actions may not work as expected.

Plans may fail.

Resources may be unavailable.

Unexpected situations may occur.

If every failure forced the agent to start over completely, long-term growth would be impossible.

The researchers therefore designed Voyager around a continuous cycle of experimentation and revision.

The agent would attempt a task.

Observe what happened.

Analyze the outcome.

Modify its approach.

And try again.

This seemingly simple idea became one of the most important components of the entire system.

---

## The Self-Improvement Loop

At the heart of Voyager lies a feedback loop.

The process can be summarized as follows:

1. Generate a goal.
2. Create code to achieve that goal.
3. Execute the code inside Minecraft.
4. Observe the outcome.
5. Analyze success or failure.
6. Modify the solution.
7. Try again.

Then repeat.

At first glance, this may seem obvious.

Many engineering systems rely on feedback loops.

But in the context of large language models, it represented something new.

The model itself was not changing.

No weights were updated.

No fine-tuning occurred.

No gradient descent was performed.

Yet the overall system became increasingly capable.

This distinction is important.

Voyager was not teaching the neural network.

It was teaching the agent.

Capability improvement emerged from interaction between:

- the language model,
- the environment,
- stored skills,
- and feedback from previous attempts.

In other words, learning had moved outside the model itself.

---

## Is Voyager Actually Learning?

This raises an interesting philosophical question.

Is Voyager truly learning?

The answer depends on what we mean by learning.

From a machine learning perspective, not really.

The neural network remains unchanged.

The model parameters do not evolve.

Training does not continue.

However, from a functional perspective, something clearly improves.

The agent becomes capable of tasks it previously could not perform.

Its behavior becomes more sophisticated.

Its exploration becomes more effective.

Its repertoire of skills expands.

A useful analogy is a human using external tools.

Imagine a researcher with a notebook.

The notebook stores observations, ideas, experiments, and conclusions.

The researcher's brain is important.

But the notebook dramatically expands what the researcher can accomplish.

The notebook becomes part of the overall cognitive system.

Voyager treats its skill library in a similar way.

The language model provides reasoning.

The external memory provides continuity.

Together they create behavior that appears to grow over time.

This idea would later influence many discussions around long-term memory, agent architectures, and cognitive augmentation.

---

## The Three Core Components of Voyager

The Voyager architecture can be understood through three major components.

Each performs a distinct role.

Together they create the appearance of an autonomous, continually improving agent.

---

## 1. Curriculum Agent

The first component determines what the agent should do next.

This may sound simple.

In reality, it is one of the most important problems in artificial intelligence.

Many systems can execute a task.

Far fewer systems can decide which task is worth pursuing.

The Curriculum Agent continuously examines:

- the current inventory,
- previously acquired skills,
- unexplored opportunities,
- and current progress.

Based on this information, it proposes a new objective.

For example:

The agent has wood.

It has stone.

It has basic tools.

But it has not yet acquired iron.

The Curriculum Agent may therefore suggest:

> Find iron ore.

Once iron has been obtained, a new objective emerges.

Perhaps crafting stronger equipment.

Or exploring a new biome.

Or searching for rare resources.

In this way, the agent continuously generates its own learning path.

This process resembles education.

A student who has mastered arithmetic moves on to algebra.

A student who understands algebra moves on to calculus.

Each achievement creates opportunities for further growth.

The Curriculum Agent serves as Voyager's internal teacher.

The difference is that no human created the curriculum.

The curriculum emerges dynamically from the agent's current state.

---

## 2. Action Agent

If the Curriculum Agent decides what should be done,

the Action Agent determines how it should be done.

This component receives a goal and generates executable code.

The generated code interacts directly with Minecraft.

It gathers resources.

Moves through the environment.

Crafts tools.

Builds structures.

And performs many other actions.

The Action Agent is where reasoning becomes behavior.

Without it, Voyager would remain a planner.

With it, Voyager becomes an actor.

This distinction echoes one of the central lessons of ReAct.

Intelligence is not only about thinking.

Intelligence is also about acting.

An agent must interact with the world.

It must observe consequences.

It must adapt.

The Action Agent makes this interaction possible.

---

## 3. Skill Library

The Skill Library is arguably Voyager's most famous innovation.

Earlier agent systems typically relied on temporary context.

Once a task ended, much of the useful experience disappeared.

Voyager changed this.

Successful behaviors could be stored permanently.

More importantly, they could be retrieved later.

Suppose the agent successfully creates an iron pickaxe.

The procedure can be stored.

When a similar task appears in the future, the agent does not need to rediscover the entire solution.

It can retrieve the relevant skill and build upon it.

Over time, the Skill Library grows.

The agent acquires an expanding collection of capabilities.

This is what gives Voyager its distinctive sense of progression.

Unlike traditional chatbots, Voyager appears to remember what it has learned.

---

## Why Voyager Attracted So Much Attention

The significance of Voyager was never about Minecraft itself.

The game was merely a testing environment.

The real breakthrough was conceptual.

Voyager demonstrated that experience could become a reusable resource.

This may sound obvious from a human perspective.

Human civilization is built upon this principle.

Every generation inherits knowledge from previous generations.

We do not rediscover mathematics from scratch.

We do not reinvent agriculture every century.

We preserve knowledge.

We transmit it.

We reuse it.

Progress becomes possible because information accumulates.

Voyager brought this idea into the world of AI agents.

Instead of solving every problem from zero,

the agent could build upon previous achievements.

For many researchers, this felt like a glimpse of something fundamentally new.

Not merely intelligent behavior.

But cumulative intelligent behavior.

---

## Experimental Results

The results reported in the paper were impressive.

Compared with previous approaches,

Voyager explored larger portions of the Minecraft world.

It discovered more unique items.

It unlocked more technological milestones.

It acquired a wider range of skills.

Most importantly, its capabilities continued expanding over time.

Traditional agents often plateau.

After a certain point, progress slows dramatically.

Voyager showed a different pattern.

As the skill library expanded, the agent gained access to increasingly sophisticated behaviors.

This created a positive feedback loop.

More skills enabled more exploration.

More exploration generated more skills.

The process resembled compounding growth.

For a field searching for ways to create long-term autonomous agents, these results were highly encouraging.

---

## The Beginning of the Agent Era

The timing of Voyager was important.

The paper appeared during a period of intense experimentation.

Researchers and developers were beginning to ask a new question.

What happens if large language models are allowed to act continuously?

This question led to an explosion of projects:

- AutoGPT
- BabyAGI
- CrewAI
- LangGraph
- OpenAI Agents
- numerous academic prototypes

Each explored different aspects of autonomous behavior.

Some focused on planning.

Some focused on memory.

Some focused on collaboration.

Some focused on task management.

Voyager's contribution was clear.

It demonstrated the value of accumulated experience.

Reasoning alone was not enough.

Long-term agency required memory.

It required continuity.

It required reusable skills.

This lesson would influence many later systems.

---

## The Skill Explosion Problem

Despite its achievements, Voyager was far from perfect.

In fact, one of its greatest strengths eventually became one of its greatest weaknesses.

The more the agent learned, the larger the skill library became.

Initially this seems beneficial.

More skills mean more capabilities.

However, growth introduces new challenges.

Retrieval becomes more difficult.

Redundant skills appear.

Outdated skills remain.

Quality control becomes increasingly complex.

The system must decide:

Which skills should be preserved?

Which skills should be merged?

Which skills should be discarded?

Human knowledge systems face similar problems.

Libraries require organization.

Companies require documentation management.

Civilizations require institutions.

Accumulation creates value.

But accumulation also creates complexity.

Voyager exposed this challenge clearly.

Many later researchers would focus specifically on solving it.

---

## The Problem of Abstraction

Another limitation involved abstraction.

Voyager was excellent at storing procedures.

It could remember how to perform specific actions.

However, humans do more than store procedures.

We extract principles.

Suppose two people learn how to gather resources.

One memorizes individual actions.

The other understands the general concept of efficient resource acquisition.

The second person can adapt more easily to new situations.

Humans naturally compress experience into higher-level concepts.

Voyager largely stored concrete solutions.

It did not deeply understand the underlying patterns connecting those solutions.

This limitation would inspire later work on memory compression, knowledge abstraction, and hierarchical reasoning.

---

## The Missing Element: Values

Perhaps the most interesting limitation becomes obvious when we compare Voyager to humans.

Voyager can act.

Voyager can improve.

Voyager can accumulate skills.

But Voyager has no values.

It does not care about safety.

It does not care about cooperation.

It does not care about fairness.

It does not care about long-term purpose.

Its objectives come from optimization processes.

Human intelligence is different.

Our decisions are shaped not only by capability, but by values.

Two people with identical skills may make completely different choices.

Because what they consider important differs.

Voyager demonstrated growth.

But it did not demonstrate identity.

This distinction would become increasingly important as researchers explored long-term agents.

---

## Looking Back from 2026

Viewed from 2026, Voyager occupies a fascinating place in AI history.

Many modern systems no longer store large collections of executable code in the same way.

Some researchers argue that retrieval costs become too high.

Others prefer generating solutions dynamically.

Still others focus on compressed memories rather than explicit skill libraries.

Yet despite these differences, Voyager's core insight remains influential.

Experience matters.

Long-term capability requires continuity.

Agents need mechanisms that allow the past to influence the future.

Today, these ideas appear in many forms:

- Long-term memory systems
- Retrieval-Augmented Generation (RAG)
- Context management frameworks
- Skill repositories
- Agent orchestration architectures

The specific implementation may vary.

The underlying idea remains.

---

## What Voyager Left Behind

Each major agent paper contributed a different piece of the puzzle.

ReAct showed that language models could reason and act.

Reflexion showed that they could improve through self-critique.

Generative Agents demonstrated how memory could produce social behavior.

MemGPT proposed a practical architecture for managing long-term memory.

Voyager contributed something different.

It showed how experience could become capability.

It transformed memory from passive storage into active skill acquisition.

For that reason, Voyager occupies an important place in the history of AI agents.

It helped shift the conversation away from isolated interactions and toward long-term growth.

---

## Conclusion

Voyager was presented as a Minecraft agent.

But Minecraft was never the real story.

The real story was growth.

The paper explored a simple but profound idea:

What if an AI could accumulate experience and use that experience to become more capable over time?

The answer was imperfect.

The system had limitations.

It struggled with scaling, abstraction, and long-term management.

Yet it demonstrated something important.

An AI agent did not have to remain static.

It could build upon its past.

It could acquire reusable skills.

It could expand its capabilities.

In that sense, Voyager marked a transition.

From one-time reasoning

to continuously expanding intelligence.

And for that reason, it remains one of the most influential agent papers of the modern AI era.

---

## Paper Information

Wang, G., Xie, C., Wang, Z., et al. (2023). **Voyager: An Open-Ended Embodied Agent with Large Language Models**. NVIDIA Research. arXiv:2305.16291. https://arxiv.org/abs/2305.16291

---

## Next Article

Voyager gave AI the ability to accumulate skills through experience.

But one problem still remained.

Even if an agent can continuously acquire new abilities, who decides what should be done next?

Can an AI break a complex objective into smaller tasks?

Can it prioritize those tasks?

Can it manage its own workflow without constant human guidance?

In 2023, a small open-source project proposed a surprisingly simple answer.

Its name was **BabyAGI**.

Despite its simplicity, the project would have an outsized influence on the future of AI agents.

In the next article, we will explore **BabyAGI**, one of the earliest and most influential experiments in autonomous task management.
