---
title: "Toolformer — Does ChatGPT Actually Know Anything? AI Doesn't Know. It Only Predicts."
date: "2026-06-05"
excerpt: "ChatGPT doesn't know anything. It predicts. Toolformer, published by Meta AI in 2023, marked the moment AI moved beyond guessing from memory toward reaching out and using the world as a resource."
lang: "en"
tags: ["paper-review"]
---

## AI Doesn't Know. It Only Predicts.

---

## Introduction

At the end of 2022, ChatGPT took the world by storm.

Ask it a question and it answers. It can explain history, discuss law, write code, compose poetry. It seemed like an all-knowing expert with an encyclopedic command of virtually every domain.

Many people reached the same conclusion: "AI has finally acquired knowledge."

Researchers, however, were looking at it a little differently. Does ChatGPT actually possess knowledge? Or does it merely appear to?

This question is fundamental to understanding what large language models really are. In 2023, Meta AI's Toolformer offered one answer.

Toolformer is not simply a paper about tool use. It marks the moment AI crossed a threshold — from trying to understand the world purely from within its own parameters, to extending its capabilities by engaging with tools that exist in the external world.

That same philosophy now runs beneath the surface of ChatGPT, Claude, Gemini, Manus, Devin, and virtually every modern agent system. In that sense, this paper stands as one of the essential foundations of the agent era.

---

## Does ChatGPT Actually Know Anything?

### A Machine That Predicts the Next Word

When we converse with ChatGPT, we almost inevitably feel that it knows things. "What is the capital of Japan?" — it answers "Tokyo" without hesitation. Ask about a historical figure and it answers. Ask about science and it explains. This naturally invites the image of a vast encyclopedia stored somewhere inside.

The reality is quite different. The Transformer does not contain a copy of Wikipedia. There is no dictionary, no knowledge base. What exists internally is nothing but a large array of numerical parameters.

At its core, a Transformer is trained for a remarkably simple objective: predict the next word.

Given the text "The capital of Japan is," the model has processed enormous quantities of text. From that experience, it has learned that "Tokyo" is highly likely to follow. That is why it answers "Tokyo."

What is critical to understand is that the model is not picturing a map of Japan, not reasoning about administrative divisions, not consulting an encyclopedia. It has learned the statistical structure of vast patterns of text, and nothing beyond that.

### Answering Correctly and Knowing Are Not the Same Thing

From a human perspective, one might argue that if it answers correctly, it might as well know. There is something to that. But the two are not fully equivalent.

The difference surfaces in unfamiliar territory. Consider the question: "Who won the 2024 Nobel Prize in Physics?" If that information is absent from the training data, the model simply doesn't know. Yet LLMs will often generate some answer regardless — citing a name that doesn't exist, confusing past laureates, adding plausible-sounding explanations.

This is the phenomenon called hallucination. The model is not lying. It is simply predicting what seems most likely to come next.

### Why Hallucinations Happen

The word "hallucination" might suggest something aberrant or broken. In reality, hallucination is a perfectly natural consequence of how LLMs work. The model's objective is not to tell the truth. Its objective is to generate text that is statistically likely to follow the input.

When given the input "The 2024 Nobel Prize was awarded to," the model doesn't know. But a response is expected. So it draws on patterns from past training data — the kinds of text that appear in Nobel Prize coverage — and assembles them. The result is a laureate who never existed.

In other words, hallucination is not a malfunction. For a prediction system, it is the expected behavior.

### Arithmetic and Date Calculations Were Also Weak Spots

The same problem appears with computation. Take "478 × 913." Most people would not do this in their head. They would reach for a calculator, a pen and paper, a smartphone — an external tool. Early LLMs had no such option. Everything had to be resolved through internal parameters alone. The result was errors even on relatively simple arithmetic. This is not a sign of low intelligence. Transformers were simply never designed to be calculators.

There is an equally instructive example with dates. If today is January 1, 2023, what date falls 100 days from now? A human would look at a calendar or check their phone. The LLMs of that era had no calendar. They had to infer the answer from recalled day counts for each month — and naturally, errors multiplied.

In both cases, the underlying problem was the same: tasks that properly call for external tools were being forced through internal knowledge alone.

### Humans Don't Live Inside Their Own Heads

Consider how human beings actually operate. We think of ourselves as intelligent — and we are. But we don't live inside our own heads. We use smartphones instead of memorizing phone numbers. GPS instead of memorizing routes. Calculators for anything complex. Search engines for anything we don't know.

Human intelligence is not self-contained in the brain. It emerges from cooperation between the brain and the tools in the world around it. Strip away search engines, dictionaries, and notebooks, and our cognitive performance would drop dramatically. Intelligence, in the human sense, is not the brain working alone — it is the brain working in concert with its environment.

---

## How Did AI Learn to Use Tools?

### What Had Been Tried Before Toolformer

The idea of giving AI tools to use predates Toolformer. But understanding precisely where prior attempts fell short makes Toolformer's significance much clearer.

First, there was work on **QA (question answering) systems**. Since the 2000s, researchers had been combining search engines with natural language processing to answer factoid questions — finding an answer for "What is the capital of Japan?" by searching the web. But the rule that a search should be triggered was written by humans. The AI was not making that judgment itself.

Then came the precursors to **Retrieval-Augmented Generation (RAG)**. The 2020 Meta AI RAG paper is well known, but the underlying intuition — if internal knowledge is insufficient, retrieve from outside — was already in the air. Early retrieval systems, however, were designed to retrieve continuously. The ability to decide when retrieval was needed was absent.

There was also work in **tool-augmented NLP**: systems that called a calculator when mathematical expressions appeared in text, or consulted an external database when named entities were recognized. But in every case, the conditions for invoking a tool were rules defined by humans — "if a mathematical expression appears, call the Calculator."

Finally, there was **API integration research** right up through the period just before Toolformer. These efforts all required large quantities of supervised data: humans had to painstakingly document "when this input arrives, call this API with these arguments." The cost did not scale.

The thread running through all of this: **AI was using tools, but was not deciding on its own when tools should be used.**

Connecting a search engine is not technically difficult. Call an API. Same for a calculator. Same for a calendar, a translation system. The technology was available. The problem ran deeper.

**When should AI use a tool?**

"2 + 2" might be fine to handle internally. "847,291 × 928,371" — a calculator is clearly the better choice. "What is the capital of Japan?" — internal knowledge suffices. "What is the current USD/JPY exchange rate?" — search is required. Who decides where that line falls?

### Teaching AI by Hand — and Its Limits

The prevailing approach was to have humans produce large quantities of labeled training examples. To build a search-enabled AI, researchers would assemble cases like:

```
Question: What is the population of Japan?
Action: Search("Japan population")
Result: 125 million
Answer: The population of Japan is approximately 125 million.
```

And for a calculator:

```
Question: 478 × 913
Action: Calculator(478*913)
Result: 436414
Answer: 436,414
```

Compile enough of these, and train the model on them. As a machine learning approach, the logic is sound. But the problems were real.

It was expensive. Extremely expensive. Every label had to be produced by a human. Every new tool meant starting over from scratch. Every new API meant building a new dataset. It simply did not scale.

And there was a more fundamental issue: the AI was not understanding the tools. It was imitating humans.

### The Question Meta Posed

The researchers at Meta AI chose to reframe the problem.

What if humans didn't have to do all the teaching? What if the AI itself could develop the judgment to recognize: "Here I should search," "Here I should calculate," "Here a calendar would help"?

This wasn't merely a question of efficiency. It was a question about intelligence itself. Humans are not instructed each time they reach for a tool. They assess the situation and act. When they don't know something, they look it up. When a calculation is complex, they use a calculator. When checking a schedule, they open the calendar.

Humans have learned to recognize the situations that call for tools. Could AI learn the same?

### Toolformer's Core: Self-Supervised Tool Use

That question is what gave rise to Toolformer. The paper's title says it plainly:

**Toolformer: Language Models Can Teach Themselves to Use Tools**

The title is the thesis. The key is not tool use — it is *teaching themselves*. The heart of Toolformer is **Self-Supervised Tool Use**: a model that learns to use tools without needing humans to supply large quantities of correct labels. That was the breakthrough.

The Transformer revolution itself was also built on self-supervised learning. Vast labeled datasets were not required. Knowledge emerged from the simple task of predicting the next word. Toolformer extended that same philosophy to tool use.

### Toolformer's Training Pipeline

The overall structure of the paper unfolds as follows:

```
Few-shot Examples
↓
Candidate API Calls
↓
Tool Execution
↓
Filtering
↓
Fine-Tuning
```

#### Step 1: A Small Number of Examples (Few-shot Prompting)

The researchers started by providing just a handful of examples for each tool. Not thousands. Not tens of thousands. A handful.

For Calculator: something like "2 + 3 → Calculator(2+3) → 5." For Search: "Capital of Japan → Search('Capital of Japan') → Tokyo." For Calendar: a few examples showing how to use `[Calendar(2023-01-01, +3)]` in response to "Today is January 1, 2023. What date is three days from now?"

Normally, such sparse examples would seem wholly inadequate for learning. But that is exactly where Toolformer begins.

#### Step 2: Generating Candidates (Candidate API Calls)

From this point, the model begins working on its own.

In conventional research, humans attach labels: "use search here," "use calculation here," "use translation here." Toolformer does something different. The model itself generates hypotheses — "what if I used a tool at this point?"

Faced with a sentence like "Mount Everest is the highest mountain in the world at," a standard language model would simply predict what comes next. Toolformer entertains a different thought: "Wouldn't it be better to just search here?" And so it generates the candidate: `Search("Mount Everest height")`.

What matters is that no human issued that instruction. The model proposed it. This surprised many researchers at the time — because deciding *where* tools should be used had been considered the central unsolved problem.

#### Step 3: Executing the Tools (Tool Execution)

Once candidates are generated, the tools are actually run. Search retrieves. Calculator computes. Calendar calculates dates. Translation translates.

`Search("Mount Everest height")` returns "8,848.86m." Up to this point, the approach is not especially unusual — many researchers had gotten this far. What came next was the genuine innovation.

#### Step 4: Evaluating Performance (Filtering)

The greatest invention in the Toolformer paper is the Filtering step.

The question the researchers asked was: "Did this tool use actually help?" And the measure they chose was not a human judge.

**They had the model evaluate itself.**

The metric is **Perplexity** — loosely, a measure of how difficult it is to predict the next word. Lower perplexity means the model is predicting more accurately. Higher perplexity means the model is more uncertain about what comes next. It is one of the most widely used evaluation metrics in Transformer research.

Toolformer turns this into the criterion for tool use. The procedure is as follows: compute the perplexity of the subsequent text *without* the tool call; then compute the same perplexity *with* the tool call's result incorporated into the context. If using the tool reduces perplexity — if it makes the subsequent text easier to predict — the tool use is retained. If it doesn't help, it is discarded.

**Did using that search result make the next words easier to predict?**

That is the entire judgment.

Why does this make the system Self-Supervised? The answer lies in what the Transformer was trained to do in the first place. The Transformer itself was trained via self-supervised learning — next-word prediction. It did not need human labels. It generated its own training signal from the structure of text. Toolformer takes that same training objective and repurposes it directly as the criterion for evaluating tool use. The model that learned from predicting words is now the judge of whether a tool call was worth making. No new evaluation axis needs to be defined by humans. No additional annotation work is required. The question of whether to use a tool is answered by the model using its own language modeling ability — the only ability it has ever had.

It is worth thinking through more carefully why this eliminates the need for human labels.

In conventional supervised learning, the "correct answer" must come from outside. Humans must label thousands of decisions: "calling Search on this sentence is correct," "calling Calculator on this sentence is correct." This was the cost and the ceiling of prior approaches.

In Toolformer, the very definition of "correct" has changed. The question of whether a tool use is correct is not decided by a human. It is decided by an objective fact: *did the tool result make the subsequent text easier to predict?* And that calculation the model can perform entirely on its own.

Put differently, Toolformer **uses the language model itself as the evaluator**. Whether tool use is worthwhile is determined automatically by the criterion of whether it makes continuation easier to predict. This circularity is possible because perplexity can be computed from the model's own parameters, without any external API call. The evaluation system is entirely self-contained — no external judge, no annotation team, no human in the loop.

The result is that the model discovers on its own — without being told "search here" — that searching at a particular point makes the next words easier to predict. It finds this out the same way it learns everything else: by running the numbers. That is the essence of Self-Supervised Tool Use, and the reason Toolformer could learn tool use without large-scale annotation costs.

```
Generate candidates
↓
Execute
↓
Perplexity with tool < Perplexity without tool?
↓
Yes → Keep
No → Discard
```

The model's own performance becomes the teacher. That is the core of Self-Supervised Tool Use.

#### Step 5: Fine-Tuning

The high-quality tool-use examples assembled through this process become new training data. Crucially, no human produced them. The model generated them; the model selected them. The result is a large dataset of tool-use interactions. The model is then fine-tuned on that data.

### The Tools Toolformer Worked With

#### Calculator

Arithmetic has long been a recognized weakness of LLMs. The reason goes back to what a Transformer actually is. It is not a calculator. It never was.

When a language model appears to understand a mathematical expression, what it is actually doing is pattern matching over numeric sequences it encountered during training. Small numbers appear frequently enough in text that the model picks up reliable patterns around them. But as the numbers grow larger, those patterns thin out. The model hasn't learned to compute — it has learned to predict what computed answers tend to look like. And that breaks down the moment the numbers fall outside familiar territory.

With a Calculator in the loop, none of that matters. Computation is delegated entirely to the tool, which handles it exactly.

What Toolformer learned was not how to compute. It learned *when* to call the Calculator — which is a fundamentally different thing. A model that calls the Calculator on every expression it encounters would be wasteful and brittle. What Toolformer developed was the judgment to recognize which problems genuinely require external computation and which can be handled from internal knowledge. That selective, context-sensitive use of tools is what carries through to how ChatGPT uses Python for computation today.

#### Search

Search was, if anything, more significant than the Calculator. An LLM's knowledge is fixed at the moment training ends — but the world does not stop there. CEOs change. Stock prices move. Exchange rates shift by the hour. News happens every day. The model trained last year has no way of knowing what happened this morning, and no amount of parameter scaling changes that fundamental constraint.

This is not a failure of intelligence. It is a problem of freshness. Internal knowledge has a shelf life, and for a wide range of practical questions, that knowledge has already expired by the time someone asks.

Search is the solution. When the model recognizes that a question calls for current or external information, it retrieves rather than recalls. The underlying philosophy is very close to what we now call Web Search, RAG, and Deep Research. By incorporating search, the model could stop pretending it knew things it didn't — and start finding them instead.

#### Calendar

Date calculations are deceptively tricky. A hundred days from now. Three months ago. Next Friday. People get these wrong. That is why we use calendars. Toolformer learned to do the same. Here again, what matters is not that the model gained better date calculation ability. What matters is that it learned to **select the right tool** when the situation calls for it.

#### Translation and Question Answering

If a specialized translation system outperforms an LLM on translation, use it. The same logic applies to external knowledge bases. There is no need to compress all knowledge inside the LLM. When external resources are available, use them.

In other words, Toolformer is not a paper about increasing knowledge. It is a paper about **changing how knowledge is obtained**. Rather than insisting on internal capabilities, it opens the door to borrowing external ones. The philosophy is fundamentally the same as how humans operate.

### Experimental Results

The paper's experimental results are striking. Toolformer showed performance improvements on essentially every tool-related task.

The most pronounced gains came with the **Calculator**. On numerical computation benchmarks, the improvement over a toolless LLM was substantial. This outcome was expected — but what made it significant was that the model was making autonomous judgments about when computation was needed. It was not invoking the Calculator on every sentence. It was identifying, accurately, precisely those points where calculation was actually required.

**Question Answering** also showed clear improvement. Access to external knowledge bases raised accuracy on fact-verification questions that LLMs alone struggled with — particularly questions involving specific numerical values or proper nouns that may not have appeared in training data.

**Search** proved effective on tasks requiring current information. Because LLM knowledge is fixed at training time, anything that changed afterward is a blind spot. Pairing the model with a search tool addressed that blind spot directly.

Calendar brought improved accuracy in date calculations; Translation showed quality gains when specialized translation systems were leveraged rather than relying on the LLM alone.

Across all of this, the paper made an important claim: **rather than simply making models larger, using tools when appropriate produces stronger results.** This was a direct challenge to the prevailing assumption of the era — that more parameters and more data were always the answer.

### The Relationship to ReAct, and Their Integration

An important comparison: ReAct is built around "Reasoning + Acting."

```
Thought (consider)
↓
Action (act)
↓
Observation (observe result)
↓
Thought (consider again)
```

By repeating this loop, AI works through problems incrementally. ReAct provided a framework for *how* AI should act.

Toolformer, by contrast, focused not on the structure of action but on **tool use** — on *what* to use. ReAct organized the procedure of action, but left open the question of which tool to use, and when.

Modern agent systems integrate both.

```
Goal
↓
Reasoning (ReAct's contribution)
↓
Tool Selection (Toolformer's contribution)
↓
Action
↓
Observation
↓
Reasoning (and again)
```

ReAct gave AI the framework to reason as it acts. Toolformer gave AI the ability to autonomously select the right tool. ChatGPT Agent, Claude Code, and Manus all rest on this combined architecture. Before Toolformer, the "Tool Selection" step either didn't exist, or was written by hand as a human-defined rule. In that sense, Toolformer and ReAct are the two foundational pillars of the modern agent.

---

## The Agent Revolution Toolformer Made Possible

### The End of the Knowledge Arms Race

In the early 2020s, AI research operated under a shared assumption: make the model bigger and it will get stronger. And to be fair, the evidence supported it — GPT-2 to GPT-3 to GPT-4, each step brought genuine capability gains. So researchers built larger models. They trained on more data. They deployed ever-larger GPU clusters.

Toolformer pointed in a different direction: if you don't know something, look it up. This is profoundly human. Humans don't memorize the entirety of recorded knowledge. They look things up when needed. That is precisely why a brain of limited capacity can navigate an immensely complex world. Toolformer showed that LLMs could move in the same direction.

### Why Organizations Exist

If one person could do everything, organizations would be unnecessary. But that is not how reality works. Humans specialize. Researchers, engineers, designers, salespeople, lawyers, physicians — each with different capabilities, working in concert. That is how large things get done. That is how they have always gotten done.

Think about what it takes to build a bridge, or run a hospital, or launch a spacecraft. No single mind contains all of that knowledge. What makes it possible is not one extraordinarily capable individual — it is the coordination of many people, each carrying a distinct piece of the whole. Human civilization has advanced through **division of labor**. The very idea of a profession — of being a specialist rather than a generalist — is built on this principle.

Could AI not follow the same path?

### AutoGPT — Can AI Work on Its Own?

Not long after Toolformer's release, the agent boom arrived. Its emblem was AutoGPT. In the spring of 2023, AutoGPT spread across the internet with extraordinary speed.

The original ChatGPT answered questions. AutoGPT did something different. Given a goal, the AI formed a plan. It searched for information. It evaluated results. It decided on next steps and executed them. Without fine-grained human instruction, it appeared to pursue tasks autonomously.

In practice, however, the problems were substantial. Anyone who used AutoGPT at the time will remember. Failures were frequent and varied.

It would issue the same search query over and over, as if it had forgotten it had already tried. It would veer off on tangents with no connection to the original task. Asked to conduct a competitive analysis, it would wander endlessly through irrelevant web pages, clicking from one link to the next with no apparent awareness that it was getting further from the goal. It would generate meaningless intermediate steps — and those steps would trigger further steps, which triggered further steps still. Unable to recognize when a task was complete, it would loop indefinitely through the same operations. API costs accumulated. Output did not.

As one researcher later put it, AutoGPT showed what it would look like for AI to work autonomously — and simultaneously showed how extraordinarily difficult that was to achieve.

Many researchers and engineers who experimented with agents at the time came away with the same impression: fascinating, but unusable. That experience became the motivation for what came next: AutoGen. **A single AI cannot handle everything. Division of roles is necessary.**

This history of failure matters. The arc from AutoGPT → AutoGen → CrewAI → LangGraph is not simply a series of feature additions. It is the evolution of a design philosophy that learned from AutoGPT's failures — from "have one system do everything" to "distribute work across a team," from "let it run freely" to "manage state explicitly." Each step has a specific failure embedded in it.

The root cause was simple: **one model was being asked to do everything**. Research. Planning. Writing. Evaluation. Revision. Every step handled by the same model. If this were a company, it would be like asking the CEO to also run sales, accounting, engineering, and legal — simultaneously, without support. It was never going to work.

Yet the historical significance of AutoGPT remains large. It demonstrated a new possibility: AI pursuing goals while using tools. And the foundation that made that conceivable was Toolformer. Without the ability to search, plans cannot be carried out. Without the ability to calculate, analysis fails. Toolformer gave agents their hands and feet. AutoGPT put them to use.

And at this point, researchers arrived at the same conclusion human societies had reached long ago: **division of roles is necessary.**

### AutoGen — Why AI Started Forming Teams

In the second half of 2023, Microsoft Research released AutoGen. It represented a significant turning point in agent research.

AutoGPT's model was "one supremely capable AI." AutoGen's model was fundamentally different: **multiple AIs working in cooperation.**

AutoGen introduced multiple agents with distinct roles:

- **Planner**: Forms the overall plan and decomposes tasks
- **Researcher**: Gathers information and performs fact-checking
- **Engineer**: Writes code and handles implementation
- **Reviewer**: Checks the quality of outputs and provides feedback

Each plays a different role; they collaborate through conversation. The Planner decides to hand off to the Researcher; the Researcher returns results; the Engineer codes based on them; the Reviewer evaluates. This cycle operates autonomously.

For the first time, agent research moved from the individual to the organization. And this thinking flowed naturally into what came next: CrewAI.

Why didn't researchers simply push for larger models? Look at human society for the answer. A single person with a very large brain is not more capable than multiple specialists. A hospital is the obvious example. Not just physicians — nurses, pharmacists, radiologists, laboratory technicians, administrative staff. Each role distinct. That is what makes complex medicine possible.

In other words, it is not only the *expansion* of intelligence that matters. The **organization** of intelligence matters just as much.

### CrewAI — The Emergence of AI as Organization

CrewAI went further, treating agents explicitly as an organization. The name says it all.

Where AutoGen emphasized multiple agents in conversation, CrewAI emphasized a **team with defined roles** — not just agents that talk, but agents that own distinct responsibilities within a structured whole.

For a market research task: the Researcher gathers information, the Writer drafts the text, the Editor reviews quality, the Manager coordinates the whole. Each role is defined in advance. Each agent knows what it is responsible for and what it is not. This is no longer a chatbot. It is a small company.

At this point, the trajectory of agent research becomes unmistakable. Early ChatGPT was something you asked questions of. AutoGPT was something that acted on its own. AutoGen was a team. CrewAI was an organization. The direction of travel — from individual toward institution — was no longer ambiguous. And each step had been forced by the failure of the one before it.

### LangGraph — Making Agents an Engineering Discipline

The broader the agent boom grew, the more another problem came into focus: **reproducibility.**

Something worked yesterday. Today it fails. There is no clear reason why. Agents are mid-discussion and nobody knows where they went off course. There is no obvious place to look. The point of failure is buried somewhere in a chain of model calls, tool invocations, and inter-agent messages that was never formally specified. For production systems — for anything a business actually depends on — this was not merely inconvenient. It was dangerous.

Real-world agents change their behavior depending on search results, retrieved data, and the outputs of external tools. The same input can yield different results on different days, or even different runs. That is intellectually interesting in a research context. In a business system, where reliability and auditability are non-negotiable, it is a serious liability.

LangGraph addressed this with an engineering-first mindset. Rather than letting agents converse freely, it introduced explicit **state machine management**.

Define a flow explicitly: Research → Analysis → Draft → Review → Publish. Specify what happens at each stage. Make the transitions visible and controllable. With this, agent development shifted from research into software engineering — from a world where you hoped things would work, to one where you could reason about why they did or didn't.

### OpenAI Agents — Standardizing the Agent

Today, agents are no longer the domain of individual developers alone. OpenAI has been pushing to standardize agent development.

Search, code execution, file handling, browser control, memory management, tracing — these are now provided as integrated infrastructure that developers can use without building from scratch. Capabilities that required painful, manual effort in the AutoGPT era are increasingly available out of the box. Agents have evolved from a research topic into a platform.

### Devin and Manus

At the far end of this trajectory are Devin and Manus.

Devin set out to agentify the software engineer itself. Write code. Run tests. Debug. Operate Git. Use a browser. Work like a developer — one developer, on its own.

Manus aimed at an even broader scope: market research, travel planning, report generation, information gathering. Producing complete deliverables through multiple tools, across domains, without being limited to a single professional role. At this point, "chatbot" is no longer the right word. "Digital Worker" is closer.

### Why Agents Were Inevitable

Looking back, none of this was accidental.

- ChatGPT handled knowledge
- Toolformer provided tools
- AutoGPT introduced autonomy
- AutoGen introduced cooperation
- CrewAI introduced organization
- LangGraph introduced structure
- OpenAI Agents standardized the platform
- Devin became a specialist
- Manus aimed to become a generalist worker

These appear, at first glance, to be separate research threads. In reality, they form a single continuous line.

---

## Why Toolformer Became a Historically Important Paper

### Quiet, But Deep

Looking back at the history of AI, some papers announce themselves as revolutionary the moment they appear. Attention Is All You Need. GPT. ChatGPT. ReAct. They generated immediate discussion. The change they represented was visible to anyone who read them.

Toolformer was different. When it was released, the common reaction was something like: "A paper about tool use." "Research on incorporating search." "Interesting, seems useful." It did not create a wave on social media.

In retrospect, however, Toolformer was an extraordinarily significant turning point. Not because it changed what AI could do, but because it **changed how AI was conceived**.

### The Definition of Intelligence Changed

Before Toolformer, intelligence in AI research was defined as internal capability. How much knowledge the model stored. How well it could reason. How large the model was. These were the metrics that mattered.

After Toolformer, the definition shifted. **The ability to access the right capability at the right moment** became central.

This moves closer to how humans operate. A skilled physician does not hold all knowledge in memory. When needed, they look up recent research. They consult specialists. They run diagnostic tests. They combine capabilities. Toolformer pointed AI in the same direction.

### Toolformer's Historical Significance

In historical perspective, Toolformer tends to be underestimated. It lacks the drama of Attention Is All You Need. It had nothing like the societal impact of ChatGPT. It does not serve as a symbol of the agent boom the way ReAct does.

Yet its influence is deep.

**Before Toolformer, AI was a closed system.**

Training data was the totality of the world. Internal parameters were the totality of knowledge. What the model didn't know, it didn't know. What it couldn't compute, it couldn't compute. What it couldn't verify, it couldn't verify. Everything had to be resolved within its own parameters. Expanding knowledge meant making the model larger, or feeding it more data. That was the working assumption of AI research.

**After Toolformer, AI became an open system.**

Search when you need to search. Calculate when you need to calculate. Retrieve external knowledge when you need it. Information you don't hold internally can be borrowed from outside. Capabilities you don't have internally can be accessed from outside. The aspiration to make intelligence self-contained gave way to something more expansive. And that shift is what gave birth to the agent era.

This movement — from closed to open — was a transformation in the foundational design philosophy of AI. Not making the model smarter, but making the model capable of using tools smartly. Without that shift in thinking, the agent revolution as we know it would not have happened.

Many people locate the beginning of the agent revolution in AutoGPT. Socially speaking, that may be right. AutoGPT was highly visible. It spread explosively across social media. It generated genuine excitement — "AI is finally working on its own."

From a technical vantage point, however, the seed of the agent revolution was planted earlier. **In Toolformer.**

An agent is not merely an entity that reasons. An agent is an entity that **engages with its environment** — searching, computing, browsing, writing code, reading files, interacting with the external world. Without those capabilities, no agent can function.

Toolformer was the first step. AutoGPT stands on that step. So does AutoGen. CrewAI. LangGraph. OpenAI Agents. Trace the agent revolution back far enough and at its root you find the question Toolformer posed: when should AI use a tool?

If Attention Is All You Need built the brain, Toolformer gave it hands and feet. And those hands and feet are what the current agent revolution runs on.

Looking at ChatGPT, Claude, and Gemini as they exist today, it can feel as if they were always this way. They weren't. The idea of AI reaching into the external world was built up, incrementally, over time. Toolformer was one of the most important steps along the way.

---

## Next Time: Lost in the Middle

Toolformer gave AI the ability to use tools. To search. To compute. To draw on knowledge from the external world. To serve as the foundation for agents.

But a new problem was emerging.

Was AI actually *understanding* the information it was given?

The industry began competing on context window length. 4,000 tokens. 32,000 tokens. 100,000 tokens. Then one million. But researchers were discovering something strange. AI remembered what appeared at the beginning of a document. It remembered the end. But when the most important information was placed in the middle, performance dropped sharply.

This was **Lost in the Middle**.

Looking back, Toolformer and Lost in the Middle point to symmetrical problems.

Toolformer addressed **how to access external capability**: when you don't know, search; when you can't compute, use a calculator; retrieve the capability you need from outside.

Lost in the Middle addressed **how difficult it is to hold information**: even when information is successfully retrieved from the outside, it means nothing if it cannot be properly used within context.

For an agent to become genuinely capable, both are necessary. Accessing the right capability. And retaining the right information.

The subsequent work on MemGPT, long-term memory research, Dynamic Context Management, and personal AI all confronted this problem directly. Why does AI lose its way in the middle of a long conversation? That is the question we will explore next.


---

## Acknowledgement

Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., Cancedda, N., & Scialom, T. (2023). **Toolformer: Language Models Can Teach Themselves to Use Tools.** *Advances in Neural Information Processing Systems*, 36. [arXiv:2302.04761](https://arxiv.org/abs/2302.04761)