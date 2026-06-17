---
title: "AutoGen — Why Did AI Start Talking to Other AIs?"
date: "2026-06-18"
excerpt: "In 2023, Microsoft Research introduced AutoGen. The idea of letting AIs talk to one another was more than a technical improvement. It changed how researchers thought about intelligence itself, marking a shift from individual to collective AI."
lang: "en"
tags: ["explainer"]
---

## Introduction

At the end of 2022, ChatGPT shocked the world.

Before that, AI had largely been a technology for researchers and engineers.

That does not mean consumer-facing AI did not exist.

Siri. Alexa. Google Assistant. Translation services. Search engines. Recommendation systems.

We were already living alongside many forms of AI.

Yet ChatGPT felt different.

For the first time, people spent long periods of time talking with an AI.

They asked questions. They requested explanations. They debated ideas. They organized their thoughts. They asked it to write articles. They asked it to write code.

And many people arrived at the same conclusion. "This is not just software."

Of course, it was software. But what people experienced felt closer to an intellectual collaborator. ChatGPT appeared to think. It appeared to understand. It appeared capable of serving as a partner in discussion.

As a result, many people arrived at a new question.

If one AI could be this capable, what would happen if there were two? What about three? What about ten?

What if specialized AIs could debate one another? What if there were an AI reviewer? What if there were an AI planner?

In reality, researchers had been asking similar questions long before ChatGPT appeared. The reason was simple. Human society had already demonstrated the answer.

We did not build civilization alone. We cooperated. We argued. We divided responsibilities. And we compensated for one another's weaknesses. The modern world exists because of that cooperation.

If humans could become more powerful through collaboration, perhaps AI could as well. And if AI could collaborate, perhaps it could become more capable than any individual system operating alone.

This question gave rise to multi-agent research.

Among the many developments in this field, one of the most important turning points arrived in 2023, when Microsoft Research introduced AutoGen.

Today we have systems such as CrewAI, LangGraph, OpenAI Agents, Claude Code, Devin, and Manus. Many different agent frameworks now exist.

Yet a surprising number of them can be traced back to one central idea introduced by AutoGen.

The idea was simple: **Let AIs talk to one another.**

In this article, we will explore the history leading to AutoGen. Why did AI begin talking to other AIs? Why did multi-agent systems emerge? And how did these ideas contribute to the modern Agent Revolution?

---

## The Beginning of the Agent Revolution

To understand AutoGen, we must first understand the wave of agent research that preceded it.

The year 2023 could reasonably be called the first year of the Agent era.

Shortly after ChatGPT appeared, researchers began confronting the same problem.

LLMs were intelligent. But they could not act. They could answer questions. But they could not reliably accomplish goals. They possessed knowledge. But they could not autonomously carry out complex tasks.

This challenge gave birth to a new wave of research.

One of the earliest breakthroughs was ReAct.

ReAct unified reasoning and acting. Before ReAct, LLMs primarily thought. After ReAct, they could search, observe, act, and then think again. For the first time, AI systems began interacting with the external world in a meaningful way.

Next came Reflexion.

Reflexion introduced a mechanism for learning from failure. Not through reinforcement learning. Not through gradient updates. But through natural-language reflection. The system reviewed its mistakes. Analyzed them. And attempted to improve future behavior.

Then came Voyager.

Voyager demonstrated an agent capable of continuous growth within Minecraft. It accumulated skills. Stored experiences. And gradually tackled increasingly complex challenges.

Then came BabyAGI.

BabyAGI introduced automated task management. A goal could generate tasks. Tasks could be prioritized. Completed tasks could generate new tasks. Many modern task-oriented agent systems trace their roots to this idea.

Each of these contributions was important. Yet they all shared one characteristic.

**The agent was always alone.**

---

## The Limits of the Single-Agent Paradigm

In human society, doing everything alone is difficult. Consider software development.

Someone must speak with customers. Gather requirements. Design systems. Write code. Test functionality. Ensure quality. Write documentation. Maintain production systems.

In theory, one person can perform all of these roles. In practice, this becomes increasingly difficult as projects grow.

That is why organizations form teams. There are product managers. Architects. Developers. Testers. Operations specialists. Responsibilities become specialized. Because specialization creates value.

Humans also face cognitive limitations.

We often miss mistakes in our own writing. We struggle to detect flaws in our own designs. We become attached to our own assumptions.

That is why reviews exist. That is why audits exist. That is why discussions exist.

Many institutions in modern society can be viewed as mechanisms for compensating for human cognitive limitations.

What about AI? At first glance, AI seems immune to these problems. It does not get tired. Its concentration does not fade. It is not driven by emotion.

Yet AI suffers from a different class of limitations.

Consider Chain of Thought reasoning. Chain of Thought significantly improved reasoning performance. But it also introduced an interesting failure mode. If the early stages of reasoning are wrong, later reasoning may simply build on that mistake. An incorrect assumption can propagate throughout the entire chain.

Reflexion partially addressed this issue. Yet one fundamental problem remained. The evaluator and the actor were still the same entity. The system was judging itself. Grading itself. Reviewing itself.

This can be helpful. But it is rarely as powerful as independent review. The same reason humans perform code reviews applies here.

At this point, researchers began asking new questions.

What if another AI performed the review? What if another AI challenged the conclusion? What if another AI examined the problem from a different perspective?

These questions would eventually become the foundation of multi-agent research.

---

## The Prophecy of Society of Mind

The idea of cooperation among intelligent agents is not new. Its roots can be traced back to the 1980s.

In 1986, MIT researcher Marvin Minsky published a book titled *The Society of Mind.*

The central argument was remarkably bold.

Intelligence is not a single thing. It is a society of many simple agents.

At the time, many researchers viewed intelligence as a unified mechanism. Minsky disagreed.

Memory. Attention. Language. Reasoning. Planning. Emotion.

These functions operate as distinct components. Their interactions produce what we experience as intelligence.

In other words, intelligence is a society.

This idea was decades ahead of its time. Even today, it remains influential in cognitive science and neuroscience.

When the era of LLMs arrived, researchers found themselves confronting a similar question.

If human intelligence emerges from many interacting subsystems, and if societies can solve problems beyond the capability of individuals, then perhaps AI systems could form societies as well.

Perhaps multiple AIs working together could achieve things that no individual AI could accomplish alone.

This idea was becoming increasingly plausible.

---

## Why Conversation?

At this point, an important question emerged. Why did researchers choose conversation?

Why not shared memory? Why not API integration? Why not predefined workflows?

The answer lies in the nature of LLMs themselves.

Large language models think through language. At least from an external perspective, most observable reasoning is expressed in natural language.

Chain of Thought. Reflexion. Self-Consistency. All rely heavily on language.

For LLMs, language is not merely an output format. It is the medium through which reasoning occurs.

If that is true, what is the most natural way for multiple AIs to cooperate?

The answer is conversation.

Humans collaborate through dialogue. Perhaps AI systems could do the same.

This approach had major advantages. No specialized communication protocol was required. No complex internal representations needed to be shared. Agents simply exchanged messages. And cooperation emerged naturally.

This simplicity would become one of the key reasons for AutoGen's success.

---

## Before AutoGen

By 2023, interest in multi-agent systems was growing rapidly.

The success of ChatGPT had revealed new possibilities. Researchers were no longer focused solely on improving individual agents. They were beginning to think about cooperation.

AIs that debate. AIs that review. Expert AIs. Critic AIs. Planner AIs. Executor AIs.

Each possessing different responsibilities. Each communicating with the others. Each contributing to problem solving.

The idea was deeply appealing.

Then, in 2023, Microsoft Research released a paper that accelerated this movement dramatically.

Its name was AutoGen. Its full title was:

**AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation.**

AutoGen was not merely a library. It was not merely another agent framework.

It represented a new way of thinking. A way of treating conversation itself as a workflow.

And that idea would significantly reshape the future direction of agent research.

---

## The Arrival of AutoGen

In 2023, Microsoft Research published **AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation**.

The essence of the paper is contained directly in its title. Multi-Agent Conversation. A conversation among multiple agents.

Today, this may sound obvious. But at the time, it represented a significant shift in perspective.

Until then, most agent research had focused on a different question: "What should AI do?"

Researchers wanted AI systems to search, calculate, write code, reflect on mistakes, plan actions, complete tasks.

AutoGen asked a different question. Instead of asking what AI should do, it asked: **"How should AIs talk to one another?"**

This was a profound change in focus. The emphasis moved away from individual capabilities and toward interactions between capabilities.

Human society works the same way. Complex problems are rarely solved by a single individual. They require collaboration among specialists.

In software development, architects communicate with developers. Researchers communicate with reviewers. Executives communicate with managers.

The more complex the problem becomes, the more important coordination becomes.

AutoGen attempted to bring this structure into AI systems.

---

## The Concept of the Conversable Agent

At the center of AutoGen lies a remarkably simple concept: the **Conversable Agent.**

As the name suggests, it is an agent designed to communicate through conversation.

Traditional agent frameworks treated agents primarily as task executors. An agent receives an instruction. The agent performs a task. The task is completed.

AutoGen viewed agents differently. An agent is a participant in a conversation.

It receives a message. Interprets the message. Generates a response. That response becomes input for another agent. The next agent responds. Then another agent reacts.

Through this process, problem solving emerges from the interaction itself.

This is a subtle but important distinction.

In traditional software systems, workflows are usually defined explicitly. Developers specify states, transitions, conditions, rules, and execution paths.

In AutoGen, conversation becomes the workflow. Conversation becomes the state transition mechanism. Conversation becomes the decision-making process. Conversation becomes coordination.

This design aligns naturally with the strengths of LLMs. Language is what they do best. Rather than forcing them into rigid software structures, AutoGen allows them to operate through their native medium.

---

## Assistant Agent and User Proxy Agent

One of the most important ideas introduced by AutoGen is the distinction between different agent roles.

Among these, two became particularly influential: the Assistant Agent and the User Proxy Agent.

The Assistant Agent is relatively straightforward. It functions much like a traditional LLM agent. It receives requests, generates responses, creates plans, writes code, analyzes information, and produces recommendations.

The User Proxy Agent is more interesting.

At first glance, it appears to be merely a stand-in for the user. But its role is far more significant. The User Proxy Agent acts on behalf of the human.

Consider a coding task.

The Assistant Agent writes code. The User Proxy Agent receives that code, executes it, checks the output, examines errors, and reports results back to the Assistant Agent. The Assistant Agent then revises its approach. Generates a new solution. And the cycle continues.

This creates an automated feedback loop. Instead of requiring a human to manually intervene after every step, agents can collaborate and improve their work through conversation.

Many modern systems still follow this pattern. Claude Code. Devin. And numerous coding agents employ variations of the same idea.

---

## Human-in-the-Loop

An interesting aspect of AutoGen is that it did not pursue complete autonomy at all costs. Instead, it treated humans as an important part of the system.

At the time, agent research was moving in two different directions.

One direction emphasized full autonomy. Remove humans from the process. Allow agents to complete everything independently.

The other emphasized Human-in-the-Loop systems. Humans remain involved. Critical decisions still receive human oversight.

AutoGen leaned strongly toward the second approach. The reasoning was practical.

Real-world problems are messy. Agents can misunderstand objectives. They can make incorrect assumptions. They can pursue the wrong strategy. They can confidently move in the wrong direction.

Allowing humans to intervene provides an important safety mechanism.

This mirrors how organizations function. Employees discuss ideas. Teams collaborate. But major decisions often require managerial approval. The goal is not total independence. The goal is productive cooperation with appropriate oversight.

AutoGen embraced this balance.

---

## The Revolution of Code Execution

Another major contribution of AutoGen was its integration of code execution.

Today this may seem routine. At the time, it was a significant step forward.

LLMs can write code. But writing code and producing working software are not the same thing. Generated code often contains mistakes. Syntax errors. Logic bugs. Incorrect assumptions.

The obvious solution is to run the code.

AutoGen built this directly into the workflow.

An agent writes code. Another agent executes it. The results are inspected. Errors are reported. The original agent revises the solution. The cycle repeats.

This process fundamentally changes the nature of interaction.

Traditional chatbots generate an answer and stop. AutoGen creates an iterative loop. The output of one step becomes the input to the next. The conversation does not end. It evolves. Improves. Adapts.

This idea would later become central to many agent architectures.

---

## When Conversation Becomes Workflow

Perhaps the most important innovation of AutoGen was this: conversation itself becomes the workflow.

Traditional software systems rely on predefined procedures. Developers specify what happens next. Rules are established in advance. Paths are predetermined. Exceptions are handled explicitly.

Knowledge work rarely operates this way. Consider scientific research.

A hypothesis is proposed. Experiments are performed. Results are analyzed. Assumptions are revised. New questions emerge. Additional investigations begin.

The process evolves dynamically. Human beings manage this complexity largely through conversation. Discussion guides action. Action produces new information. New information reshapes discussion.

AutoGen attempted to replicate this pattern.

Agents talk. The conversation determines the next action. Actions generate new observations. Observations generate new conversations.

As a result, a flexible workflow emerges naturally.

This was a radically different approach from traditional software engineering.

---

## Planner and Executor

After AutoGen, many multi-agent systems began converging on a common structure.

Planner. Executor. Reviewer. Critic. Specialist. Supervisor. Each role performs a different function.

Consider a software development project. The Planner creates a strategy. The Executor implements it. The Reviewer checks quality. The Critic identifies weaknesses. The Supervisor coordinates the overall process.

This structure closely resembles human organizations.

What makes it particularly interesting is that these roles can be implemented using the same underlying model. The model remains unchanged. Only the role changes. Yet changing the role often changes behavior dramatically.

A critic approaches problems differently from an implementer. A reviewer thinks differently from a planner. A tester looks for different signals than an architect.

This diversity of perspectives can improve performance without requiring a larger model.

Researchers began noticing an important phenomenon. Sometimes, role specialization produced greater improvements than simply scaling model size.

This observation would become one of the foundational ideas behind later multi-agent research.

---

## The Possibilities Revealed by AutoGen

AutoGen was more than a software library. It represented a new design philosophy.

Instead of making a single agent smarter, build systems of cooperating agents.

Instead of pursuing increasingly powerful individuals, create increasingly effective teams.

This shift in thinking would influence a large portion of future agent research.

And it naturally led researchers toward even larger questions.

If two AIs can cooperate, what about three? What about ten? What about teams of specialists? What about structured debates? What about entire societies of agents?

These questions marked the beginning of a transition. AI research was no longer focused solely on individual intelligence. It was beginning to explore collective intelligence.

---

## The First Step Toward Collective Intelligence

AutoGen attracted attention for more than its ability to run multiple agents. Its deeper significance lay elsewhere. It changed how researchers thought about intelligence itself.

For decades, much of AI research had focused on building smarter models. More parameters. More data. More compute. Longer context windows. Stronger reasoning capabilities.

These directions remain important today. AutoGen did not reject them. Instead, it suggested an additional possibility.

Perhaps intelligence does not emerge solely from the capabilities of individual agents. Perhaps intelligence can also emerge from interactions between agents.

This idea closely mirrors human civilization. Modern society was not built by a single genius. It was built through the cooperation of countless specialists.

Engineers design semiconductors. Programmers write operating systems. Researchers develop algorithms. Operators maintain data centers.

Each individual possesses only a limited set of skills. Yet together they create systems of extraordinary complexity.

If AI systems could cooperate in a similar way, perhaps they could achieve something beyond the capabilities of any single model.

AutoGen was one of the first practical demonstrations of this possibility.

---

## CAMEL and Role Playing

Around the same time that AutoGen emerged, another influential line of research was gaining attention.

CAMEL. Its full title was **Communicative Agents for Mind Exploration of Large Language Model Society.**

Like AutoGen, CAMEL focused on communication between agents. However, its emphasis was different.

AutoGen focused primarily on practical task execution. CAMEL focused on roles. Role-playing. And social interaction.

Imagine assigning different identities to agents.

A software engineer. A product manager. A designer. A teacher. A student.

Each receives a different role. Each receives different goals. Each receives a different perspective.

What happens next is fascinating. The agents begin behaving differently. Even when they are powered by the same underlying model.

A change in role produces a change in reasoning. A change in reasoning produces a change in behavior. A change in behavior produces a different approach to problem solving.

This idea would later influence many areas of research. Role-Playing Agents. Multi-Agent Debate. AI societies. Collective reasoning systems.

CAMEL demonstrated that diversity of perspective could emerge from role assignment alone.

AutoGen and CAMEL were not competitors. They were complementary. AutoGen provided a framework for communication. CAMEL demonstrated the power of specialization.

Many modern multi-agent systems inherit ideas from both.

---

## The Influence of AutoGen

The impact of AutoGen turned out to be larger than many initially expected. Many of the agent frameworks that followed adopted its core ideas in one form or another.

CrewAI is a good example. CrewAI explicitly models agents as a team. Researchers. Writers. Editors. Reviewers. Each receives a distinct responsibility. Each collaborates with the others.

LangGraph followed a different path. Instead of focusing solely on conversation, it introduced graph-based orchestration. States. Branches. Loops. Retries. Control flow. LangGraph attempted to combine the flexibility of agent communication with the reliability of traditional software systems.

OpenAI Agents introduced yet another variation. Different tools. Different capabilities. Different specialized components. Working together toward a common objective.

The implementation details vary. The architecture varies. But the underlying idea remains remarkably similar. Break intelligence into components. Allow those components to cooperate. And solve problems collectively.

---

## Devin and Claude Code

Beginning in 2024, the phrase "multi-agent" became less prominent in public discussion. Yet the underlying concepts continued spreading.

A useful example is Devin. Devin was presented as an AI software engineer. Users interact with what appears to be a single system. It reads documentation, writes code, runs tests, fixes bugs, uses browsers, performs research, and delivers results.

At first glance, it appears to be a single agent. But internally, many distinct functions are operating simultaneously. Planning. Execution. Observation. Evaluation. Revision. These processes are often separated into specialized components.

Claude Code follows a similar pattern. From the user's perspective, it appears to be a single assistant. Internally, however, multiple responsibilities must be coordinated. Planning tasks. Managing context. Executing actions. Reviewing results. Adjusting strategies.

In many modern systems, multi-agent thinking has become embedded within the architecture itself. The language may have changed. The interfaces may look simpler. But the underlying philosophy remains deeply influenced by AutoGen.

---

## Manus and Modern Agents

Between 2025 and 2026, a new generation of agents began attracting attention. Systems such as Manus represented a significant step forward.

These were no longer simple chatbots. They could search, plan, execute, verify, revise, delegate work, and coordinate multiple processes toward a goal.

When necessary, tasks could be passed from one component to another. Results could be synthesized and returned to the user.

In many ways, this vision closely resembles the future that AutoGen originally suggested.

The technology has improved dramatically. Context management is better. Tool integration is more sophisticated. Models are significantly more capable.

Yet the core idea remains unchanged. Complex problems often require multiple specialized functions working together. AutoGen helped establish this way of thinking. Its influence can still be seen throughout modern agent systems.

---

## The Challenges of Multi-Agent Systems

Of course, multi-agent systems are not a universal solution. In fact, they introduce entirely new classes of problems.

The most obvious is cost. More agents create more conversations. More conversations consume more tokens. More tokens require more computation.

A ten-agent system is not necessarily ten times more effective than a single-agent system. Sometimes it is less efficient. Sometimes it creates confusion. Sometimes it creates bureaucracy. Sometimes it slows everything down.

Another challenge is communication overhead. Agents must exchange information. That exchange requires resources. As the number of agents increases, the cost of coordination increases as well. This phenomenon is well known in organizational theory. Surprisingly, many of the same dynamics appear in AI systems.

An even more interesting problem is collective failure. Groups can be wrong. Not just individuals.

If all agents share the same flawed assumption, the entire system may move in the wrong direction. This resembles what humans call groupthink.

Multiple agents do not guarantee correctness. Multiple agents do not guarantee safety. Multiple agents do not guarantee intelligence.

As researchers explored these systems further, they discovered that collective intelligence introduces its own challenges.

---

## From Individual Intelligence to Collective Intelligence

Despite these limitations, AutoGen remains historically important.

It did not invent memory. It did not invent reasoning. It did not invent reflection. It did not invent learning.

What it changed was perspective.

Before AutoGen, researchers primarily focused on building smarter individuals. After AutoGen, many researchers began thinking about building better collectives.

This shift matters.

Human civilization did not advance solely because individuals became smarter. It advanced because humans learned to cooperate.

Organizations. Communities. Research networks. Companies. Governments.

Knowledge develops within groups. Progress emerges through collaboration.

AutoGen suggested that AI might follow a similar path. The future of intelligence might not belong solely to larger models. It might also belong to better cooperation.

---

## Conclusion

At first glance, AutoGen may seem like a relatively modest contribution.

It did not introduce a revolutionary new model. It did not dramatically change benchmark scores. It did not produce a new scaling law.

Yet its impact has been profound.

AutoGen placed conversation at the center of the system. Conversation was no longer merely a user interface. It became a mechanism for problem solving. A mechanism for coordination. A mechanism for intelligence itself.

From that point forward, multi-agent research accelerated rapidly.

CrewAI. LangGraph. Claude Code. Devin. Manus.

Many modern systems owe part of their lineage to the ideas introduced by AutoGen.

The moment AI began talking to other AIs was not merely a new feature. It was a turning point. A transition from individual intelligence toward collective intelligence.

---

## Next Article

AutoGen made communication between AIs possible. But researchers quickly encountered a new challenge.

If every agent is identical, does building a team actually matter?

Human organizations rely on roles. Managers. Researchers. Engineers. Designers. Each contributes something different.

What would happen if AI systems were given roles as well? Could the same model think differently depending on its position? Could specialization emerge through role assignment alone?

In the next article, **"Why Did AI Start Taking on Roles?"**, we will explore the emergence of CAMEL and Role-Playing Agents, and examine how role specialization became the foundation of AI societies.

---

## References

Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Wang, C., & others. (2023). **AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation.** [arXiv:2308.08155](https://arxiv.org/abs/2308.08155)

Li, G., Hammoud, H., Itani, H., Khizbullin, D., & Ghanem, B. (2024). **CAMEL: Communicative Agents for Mind Exploration of Large Language Model Society.** [arXiv:2303.17760](https://arxiv.org/abs/2303.17760)

Minsky, M. (1986). *The Society of Mind.* Simon & Schuster.

Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., & Cao, Y. (2023). **ReAct: Synergizing Reasoning and Acting in Language Models.** [arXiv:2210.03629](https://arxiv.org/abs/2210.03629)

Shinn, N., Labash, B., & Gopinath, A. (2023). **Reflexion: Language Agents with Verbal Reinforcement Learning.** [arXiv:2303.11366](https://arxiv.org/abs/2303.11366)

Wang, G., Xie, S., Yu, Z., Wang, J., & others. (2023). **Voyager: An Open-Ended Embodied Agent with Large Language Models.** [arXiv:2305.16291](https://arxiv.org/abs/2305.16291)

Nakajima, Y. (2023). **BabyAGI.** [GitHub](https://github.com/yoheinakajima/babyagi)
