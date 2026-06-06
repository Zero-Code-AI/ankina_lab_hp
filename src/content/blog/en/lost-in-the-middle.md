---
title: "Lost in the Middle — Why AI Gets Lost in Long Conversations"
date: "2026-06-06"
excerpt: "AI systems with million-token context windows still lose track of what matters most. The Lost in the Middle phenomenon reveals something fundamental about how AI actually processes information — and why longer isn't always better."
lang: "en"
tags: ["paper-review"]
---


---

## The Dream of One Million Tokens

### How Much Information Can AI Actually Handle?

Since ChatGPT arrived at the end of 2022, the AI industry has seen competition on many fronts.

Larger models.

Higher benchmark scores.

More advanced reasoning.

More accurate answers.

But among all of these battles, one of the most intense was the race to expand the context window.

The context window is the amount of information an AI can reference at one time. When we ask ChatGPT or Claude a question, the model reads the information provided at that moment and generates a response based on it. There is a hard limit on how much information it can take in at once. That limit is the context window.

In the beginning, that number sat at a few thousand tokens. Within a few years it grew to tens of thousands, then hundreds of thousands, and eventually the figure of one million tokens appeared.

Why did the industry become so captivated by context length? This was not merely a competition over specifications. Many researchers and developers genuinely believed that context length would be AI's next major breakthrough.

Looking back at the atmosphere of that era, the excitement was not exaggerated. The prevailing view was that the narrowness of what an AI could "see" at one time was the single greatest constraint on its capabilities. If a model could retain months of conversation history, or reference an entire company's manuals and a research lab's full paper archive in a single pass, something fundamentally different from any existing AI would emerge. Many people saw exactly that future ahead of them.

⸻

### The Constraints of the GPT-3 Era

It is easy to forget, given how accustomed we have become to today's AI, that the models of the GPT-3 era operated under severe constraints.

GPT-3 was released in 2020. Its 175 billion parameters stunned the world at the time. It demonstrated few-shot learning, handling tasks it had never been explicitly trained on. Its capabilities were revolutionary.

But viewed from today, it carried a serious weakness: context length.

GPT-3 could handle roughly 4,000 tokens — a few pages of English text. That number is not trivial, but it was far too small for serious intellectual work.

Take research papers. An AI research paper typically runs ten to twenty pages, and longer with references. GPT-3 could not read an entire paper in a single pass. Source code presented the same problem. Modern software development involves codebases of tens or hundreds of thousands of lines, but GPT-3 could only see a small slice at a time.

Conversation suffered too. Extend a dialogue long enough and the model would start dropping earlier content — forgetting decisions made just thirty minutes ago, losing the background a user had explained, discarding important constraints that had been set.

The AI of that era appeared intelligent. But it had almost no capacity for sustained collaborative work.

Tasks that are now taken for granted — feeding in a paper to read, analyzing a codebase, summarizing a long meeting log — were genuinely difficult at the time. In most cases, users had to manually split documents, paste them in repeatedly, and keep prompting the model to remember the context it had lost. It would be fair to say that people were making AI work through human ingenuity rather than the model's own capability.

⸻

### Why Long Context Was So Desperately Wanted

This was not merely an inconvenience. It was a barrier to AI's practical adoption.

When organizations considered deploying AI, the documents they needed to handle were long. Contracts. Technical specifications. Design documents. Meeting minutes. Manuals. Legal filings. Internal policies. Customer correspondence. Information spanning tens or hundreds of pages was the norm, not the exception. If AI could only read a few pages at a time, serious business use was out of reach.

Research faced the same problem. Researchers need to compare multiple papers, survey prior work, and trace references. But with a small context, information had to be divided and fed in piecemeal, losing coherence with each split.

The burden on users was substantial. The same explanation had to be repeated. Content discussed earlier had to be re-entered. On long projects, this overhead compounded relentlessly.

The core challenge of that era, in other words, was not the model's knowledge. It was the cost of accessing that knowledge — the labor required for a human to organize and deliver context before the AI could be of any use. That was the real wall. And that is why so many people placed their hopes in longer context windows.

⸻

### The Revolution That GPT-4 Brought

Things began to change significantly with GPT-4.

OpenAI dramatically expanded the context window. 8K. Then 32K. And larger options followed.

This was not merely a numerical improvement. The experience itself changed. Documents that had previously required splitting could now be loaded all at once. Long contracts could be reviewed. Complex code could be analyzed. Lengthy meeting records could be summarized. Dense technical documentation could be processed end to end.

For the first time, many people felt that AI could genuinely be used for real work.

The expansion of context length had a greater impact on practical usability than any improvement in raw reasoning ability. It was a key factor in AI's transition from a research laboratory demonstration to a working professional tool.

The user base of generative AI expanded dramatically around this time. Legal professionals, consultants, corporate planners, marketers, writers, teachers, and students — anyone who dealt with long documents — began adopting AI in rapid succession. Context length was not an abstract benchmark. It was a capability people could feel directly.

⸻

### The Claude Shock

But the most striking development came from Anthropic.

Claude.

Anthropic made long context a central pillar of its offering. 100,000 tokens. Then 200,000 tokens. By the standards of the time, these numbers felt like a different dimension entirely.

Dozens of research papers. Several full-length books. An entire large codebase. All of it could be fed in at once. People were stunned.

"You can hand it an entire book."

"You can give it the whole company manual."

"It can see the entire source code."

Posts along these lines flooded social media. Things that had seemed impossible were beginning to feel real. Long context was no longer a matter for researchers alone. It had become a capability that ordinary users could experience firsthand.

For enterprise use, this carried particular significance. Corporations already possessed enormous information assets. The problem was not a shortage of knowledge — it was an excess of it. Contracts, meeting minutes, technical documentation, customer records — the cost of organizing, splitting, and summarizing all of that material before handing it to an AI had been one of the biggest barriers to enterprise AI adoption.

Claude's long context generated a new expectation: that existing information could simply be passed to an AI as-is, without preprocessing. This represented not just a performance improvement but a potential reduction in the total cost of deploying AI in organizations.

⸻

### The Case Against RAG

Claude's arrival sparked a particular debate.

The case against RAG.

RAG — Retrieval-Augmented Generation — is a system that retrieves relevant information on demand rather than loading everything at once. Instead of placing an entire document corpus into the context, it searches for the relevant portions and supplies only those. At the time, RAG was considered a critical technique for compensating for AI's limited knowledge.

But when Claude appeared, a new question emerged: was retrieval even necessary anymore?

If 200,000 tokens could fit inside the context, the thinking went, there was no need to search. Everything could be loaded upfront. The retrieval mechanism itself became unnecessary — or so it seemed.

This might look like naive reasoning in hindsight. But in context, it was rational. The biggest problem until that point had been that information would not fit. If everything fit, why search for parts of it? The retrieval step appeared to solve a problem that no longer existed.

⸻

### Do We Still Need Memory Systems?

The same logic extended to memory systems.

Research into long-term memory for AI had been underway for some time. The approaches involved saving conversation history, summarizing important content, and retaining user information across sessions. These efforts were advancing steadily.

But when massive context windows appeared, a new opinion took hold: memory systems might no longer be needed.

Everything could fit. Past conversations. Meeting notes. Configuration details. User preferences. All of it could be loaded directly into the context. If that was true, building complex memory infrastructure seemed unnecessary. A large enough context would handle everything on its own.

This thinking drew on a deeply familiar model of how computers work. Insufficient storage? Add more. Not enough memory? Expand it. Why should AI be any different? It was a natural assumption to make.

⸻

### Could Long Context Solve the Agent Problem?

The same hopes extended to agents.

An agent is not a simple chatbot. It plans, acts, observes the results, replans, and repeats the cycle many times over. But agents had a serious problem: their history kept growing. Action logs, observation results, task lists, reasoning traces, error messages, success records — all of it accumulated. Eventually the context overflowed, and past information was lost. The agent would start repeating the same mistakes, forget earlier decisions, and try to solve problems it had already resolved.

Many researchers reasoned that if the context window reached one million tokens, this problem would go away. An agent could operate for extended periods without losing its thread.

Around 2023 and 2024, the view that longer context would dramatically advance agents was commonplace in that community.

⸻

### Gemini and the Dream of One Million Tokens

Then Google presented an even larger number.

One million tokens.

It was a symbol. Not merely the ability to read a long document — a scale at which an entire knowledge base could be provided whole. Dozens of research papers at once. Extended meeting histories. Multiple books. An entire corpus of internal corporate documents.

At this point, people began to think that AI had acquired something like long-term memory. With a context large enough, a model could retain information the way a human does across extended periods of time. That expectation took hold widely.

And by this point, many people had come to feel that the context length problem itself was nearing its end. Claude at 100K or 200K had already felt extraordinary. Now a million tokens had arrived.

Research papers. Books. Codebases. Meeting histories. Corporate documents. The possibility of handling all of it in a single pass seemed within reach.

The debates about RAG, memory systems, and long-running agents that had occupied the field all sat on this same continuum. Rather than searching for needed information, why not just provide everything upfront? Rather than managing memory, why not simply retain the full history? The problem of agents losing their context — surely that too would be solved by a large enough window?

Skeptics existed, of course. But at a minimum, the expectation that expanding context length would resolve many of AI's outstanding problems had spread across the industry as a whole.

One million tokens was not merely a performance metric. It had come to look like a symbol that AI was approaching something resembling long-term human intelligence.

But in the middle of that excitement, one question had not been asked with sufficient seriousness.

Could AI actually use all of that information?

⸻

### The Industry's Illusion

That question was not something the industry of that era was ready to face.

Context length expansion had been generating real value. The progression from GPT-3 to GPT-4 made that undeniable. And so most people looked ahead along the same trajectory.

The assumption that had spread across the industry was simple.

Read more.

↓

Understand more.

↓

Become smarter.

But that assumption contained a critical gap. An AI can accept one million tokens as input. But can it actually use one million tokens? Is receiving information the same as utilizing it? Is being able to read a book the same as understanding it?

These questions were barely being asked at the time. The industry was focused on the number itself. Researchers, however, were beginning to harbor a different doubt — one that would eventually prompt a fundamental reassessment of the long context race.

---

## Lost in the Middle

### Reading More Does Not Mean Understanding More

As the context window competition intensified, the AI industry operated on a quiet optimism.

Expand the context and the problems will solve themselves. Handle longer documents. Sustain longer conversations. Agents will stop forgetting their past. Massive bodies of knowledge can be utilized all at once.

This expectation was not unreasonable. The progression from GPT-3 to GPT-4, Claude's 100K and 200K contexts, and Gemini's one million tokens had all genuinely transformed the user experience. Documents that previously required splitting could now be processed whole. Long meeting records became manageable. Corporate manuals and technical documentation became usable.

Context length expansion was real progress. And so many people projected a clear future: longer context, longer conversations, longer memory, smarter AI. Long context appeared to be the key that would resolve many of AI's outstanding problems at once.

But within that excitement, a subset of researchers was sitting with a different question.

Is that actually true?

AI could now receive enormous amounts of information. But was it actually using that information? Is being able to read something the same as being able to understand it at length?

This question was barely part of the conversation at the time. The industry's attention was fixed on a single measure: how long can the context get? Looking back, the more important question was a different one: how much of that context can actually be used?

⸻

### A Turning Point in Long-Context Research

In 2023, researchers from Stanford University, UC Berkeley, Samaya AI, and other institutions set out to test that question directly.

The result was the paper:

*Lost in the Middle: How Language Models Use Long Contexts*

This paper is unusual. It proposes no new model. It does not increase parameter counts. It changes no training methodology and improves no inference speed. And yet it had a significant influence on how the field thought about long-context AI.

The reason is simple. The researchers were not asking whether AI could hold a long context. They were asking whether AI was actually using it.

The difference looks small. In practice, it was decisive. The industry had been watching the number. These researchers were looking at what the number contained.

⸻

### The Information Is There

The experiment the researchers designed was strikingly simple.

Take a long document. Embed within it the information that answers a specific question. Then ask the model the question.

The target might be a company CEO's name. The author of a specific paper. The date of a particular event. The wording of a legal clause. Whatever it was, the answer existed in the document. The model had received that information. The context window was not under strain. There was only one thing to determine: could the AI actually use it?

A separate evaluation method that became widely known is "Needle in a Haystack," developed and popularized by Greg Kamradt in late 2023 and subsequently formalized as a benchmark. It is a distinct piece of research from Lost in the Middle, though the intuition behind both is closely related: how well can a model retrieve a specific piece of information embedded within a large body of text?

⸻

### Only the Position Changes

The researchers then introduced a single, carefully controlled variation.

They did not change the volume of information. They did not change the question. They did not change the length of the document. The only thing they changed was the position of the key information within the document.

Beginning of the document. Middle of the document. End of the document.

If AI were utilizing the full context uniformly, performance should not vary. The answer is there regardless of its location. In theory, results should be identical.

But the actual results were different — and the gap was larger than most had anticipated.

⸻

### The Primacy Effect

The first pattern observed was the Primacy Effect.

When the key information appeared near the beginning of the document, models showed high accuracy. This mirrors a phenomenon well established in human cognition. In meetings and lectures, the content presented first tends to be retained more reliably. After reading a long book, the opening sections often remain vivid. Cognitive psychology has documented this for decades.

LLMs showed a similar tendency. Information positioned near the start of a document was more readily retrieved.

At this stage, there was little cause for alarm. The behavior resembled something familiar from human memory. Long context appeared to be functioning well enough. But the real problem lay ahead.

⸻

### The Recency Effect

The researchers then moved the key information to the end of the document. Performance rose again.

This is the Recency Effect.

It too is well established in human cognition. We tend to remember what we heard most recently. In a long meeting, the conclusions reached at the end leave a stronger impression. A lecture's final summary tends to stick. LLMs showed the same pattern: information near the end of a document was utilized more strongly.

Taken together, the picture so far seemed reassuring. The beginning works. The end works. Surely the middle would as well.

Most observers expected exactly that.

⸻

### What Happened in the Middle

The results were different.

When the researchers moved the key information to the middle of the document, accuracy dropped sharply.

What matters here is what had not changed. The information had not disappeared. It was still in the document. The model had received it. The context window was not exhausted. The answer was present in the input.

And yet performance fell.

This was a strange result. If the context had been too short, the explanation would have been simple. But that was not the situation. The model was holding the information. It simply could not make adequate use of it.

Here, for the first time, the researchers came face to face with a fundamental problem in long-context AI.

⸻

### Lost in the Middle

The researchers named the phenomenon Lost in the Middle.

"Getting lost in the middle." It is a remarkably well-chosen name, because the problem is not simply a performance drop.

The AI is reading. But it cannot use what it reads. The information exists. But it cannot be retrieved. Somewhere in the middle of a long document, the model loses its grip on what matters most — much like a person who forgets the original topic partway through a long conversation.

The pattern, when plotted, is visually striking. Performance does not follow a flat line. It takes a U-shape. High at the beginning. Dropping in the middle. Rising again at the end.

Ideally, the curve would be flat. Wherever the information appeared, performance should be the same. But that is not what the data showed. AI was not treating the full context uniformly. It was not reading everything with equal attention.

⸻

### Why Does This Happen?

What causes this phenomenon?

The paper identified it clearly, but did not fully explain its origin. Researchers have discussed several candidate mechanisms.

Central to those discussions is positional bias.

Transformers are theoretically capable of attending to every token in the context. This makes it natural to assume that information can be utilized equally regardless of its location. But real models are built through training, and training introduces biases.

Current research points less toward biases in training data and more toward the behavior of positional encoding and attention patterns as the primary candidates. Specifically, the dynamics of positional encodings such as RoPE (Rotary Position Embedding) may be generating uneven utilization across positions in long-context settings.

This is not simply a matter of attention failing to function. Rather, the positional biases that models develop during training appear to become visible when those models are placed under long-context conditions.

A complete explanation does not yet exist. But one assumption has clearly broken down: that providing a long context automatically results in uniform utilization across it.

⸻

### A Strange Resemblance to Human Cognition

What makes this finding particularly interesting is how closely it mirrors human behavior.

Cognitive science has long documented both the Primacy Effect and the Recency Effect in humans. We too tend to forget the middle of a long sequence. Recalling a meeting, the opening and the conclusion stand out; the discussion in the middle grows hazy.

The internal architecture of the human brain and that of a Transformer are entirely different. The mechanisms are not comparable. And yet, when looking at the outputs alone, a striking parallel emerges. Does intelligence that processes large volumes of information — regardless of its substrate — tend to lose the middle?

Or is this a coincidence?

The question remains open. But it has become difficult to dismiss this as a quirk specific to AI. It may be something more general.

⸻

### The Collapse of the Long-Context Myth

Lost in the Middle mattered not simply because it identified a weakness. It mattered because it challenged a foundational assumption of the field.

The prevailing logic had been:

Longer context

↓

More information

↓

Higher performance

The paper revealed a different reality.

Being able to read one million tokens is not the same as being able to use one million tokens. Possessing an enormous library is not the same as being able to find the book you need. Holding a large volume of conversation history is not the same as being able to recall what matters within it.

Context length alone was not a solution. It was, if anything, a lens that brought a new set of problems into focus.

The dream of one million tokens — the dream the industry had been chasing — encountered reality for the first time through this paper.

⸻

### The Question Left Behind

Lost in the Middle left a question in its wake.

AI processes information. AI returns answers. But what is actually happening in between?

If performance changes substantially based solely on where key information sits within a document, what exactly are we observing? Is it understanding? Or is it behavior that resembles understanding?

This question reaches beyond the domain of long context. It connects to something more fundamental about AI itself. And the attempt to face it pushed the industry in a different direction. Rather than expanding context, the focus shifted: find the important information. Retain the important information. Manage the important information. That shift in thinking would lead to RAG, Memory Systems, and eventually Context Engineering.

---

## How the Industry Responded

### From Expanding Context to Managing It

When Lost in the Middle was published, many researchers were genuinely surprised by what it showed.

Everyone knew AI was imperfect. Hallucination was a recognized problem. Arithmetic errors occurred. Reasoning failures happened. But on the specific question of long context, the prevailing mood had been relatively optimistic.

Context length was growing rapidly. GPT-4 had far surpassed GPT-3. Claude had reached 100K and 200K. Gemini had announced one million tokens. The widespread expectation was that just a little more context would be enough to resolve the remaining issues.

That is what made Lost in the Middle a shock.

The problem was not insufficient capacity. The information was present. It fit within the context. And yet it could not be utilized. For many researchers, this was not the failure mode they had anticipated.

From that point, the question the field was asking began to shift.

The old question was: how do we get more information in?

The new question, after Lost in the Middle, was: how do we get the right information out?

This was not merely a change of research topic. It was a turning point that redirected the trajectory of AI research for the years that followed.

⸻

### The Limits of Trying to Remember Everything

Before Lost in the Middle, the dominant intuition was simple.

Context too short? Make it longer. Document too long to read? Extend the window. Model forgetting the conversation? Keep the full history.

In its own way, this was a natural way to think. Throughout the history of computing, storage problems were solved by adding more storage. Memory problems were solved by adding more memory. The assumption that AI would follow the same pattern was intuitive.

Lost in the Middle demonstrated that this approach alone was not sufficient.

Reading one million tokens is not the same as using one million tokens.

For the first time, "volume of information" and "capacity to utilize information" were recognized as separate problems. And the field moved on to the next question: if remembering everything is not the solution, what should be done instead?

⸻

### The Rise of RAG

The first major answer to that question was RAG — Retrieval-Augmented Generation.

Today RAG is one of the standard techniques in generative AI. At the time, it represented a genuinely new way of thinking.

The idea behind RAG is remarkably simple. Do not try to remember everything. Search when you need something. That is all.

But this represented a fundamental departure from the prevailing view. Until then, the assumption was that having knowledge was what mattered. RAG inverted that: what mattered was the ability to find knowledge.

⸻

### Humans Do Not Remember Everything Either

This approach has a close parallel in how humans actually use knowledge.

A lawyer does not memorize every law. A physician does not retain every paper in the medical literature. A researcher does not hold every relevant study in memory. They search when they need something. They read what they find. They reference what is useful at the moment.

Knowledge is not only a matter of storage. It is also a matter of access.

RAG brought this reality into AI. A model retrieves the information it needs, uses only what the retrieval returns, and does not need to load an entire document corpus into the context. The result was that many long-context problems became tractable in practical terms.

⸻

### What Embedding Changed

The technology that made RAG viable was Embedding.

Embedding converts text into vectors in a meaning space. It sounds technical, but the core idea is simple: passages with similar meanings are placed near each other; passages with different meanings are placed farther apart.

"I have a dog" and "I keep a dog as a pet" end up close together. "Error correction in quantum computing" ends up far away from both.

This allowed AI to search by meaning rather than by keyword. Traditional search was keyword-driven. Embedding made search meaning-driven. The practical gap between these two approaches is significant. The maturation of Embedding technology was what made RAG viable as a production system.

⸻

### The Enterprise AI Explosion

RAG spread through enterprises rapidly.

The reason was clear. Corporations already held vast stores of knowledge. Contracts. Manuals. Meeting minutes. Technical documents. Design materials. Customer records. The problem was never a shortage of knowledge — it was an excess of it.

RAG fit this situation well. Organizations did not need to retrain a model. They simply indexed their existing documents and made them searchable. Current information remained accessible. Internal data stayed within their control.

As a result, most enterprise generative AI systems built from 2024 onward were constructed around RAG as a core component. Looking back at the AI industry of that period, it would be fair to say that the generative AI boom and the RAG boom were happening simultaneously.

⸻

### But RAG Was Not Enough

Before long, new limitations became apparent.

RAG is strong at document retrieval. It handles knowledge search well. But human memory is not only those things.

Past conversations. The history of collaborative work. Goals currently being pursued. Lessons from past failures. A user's values and preferences. These kinds of information do not fit cleanly into a document retrieval framework.

Consider the question: why did we make this design decision for this project? The answer may not exist in any single document. It might be scattered across dozens of discussions. It might be the product of an agreement that formed gradually over multiple meetings.

RAG excels at finding individual documents. It struggles to synthesize meaning that is distributed across multiple conversations and iterative exchanges. RAG was a powerful tool. But it was not sufficient on its own to replicate the kind of sustained intellectual collaboration that humans engage in over time.

⸻

### The Return of Memory Research

This brought renewed attention to Memory research — a field that had briefly been declared unnecessary.

Massive context windows would make it obsolete, some had argued. RAG would replace it. But reality proved otherwise.

Being able to search for something is not the same as remembering it. Being able to retrieve needed information is not the same as maintaining a continuous thread of context.

Researchers returned to the question: does AI need memory? Not just retrieval — something closer to the kind of memory humans have.

⸻

### The Idea of Long-Term Memory

From this point, Long-Term Memory research intensified.

Human cognition draws on both short-term and long-term memory. What you are reading right now, what you are seeing on the screen, what you are hearing in the room around you — these are processed in short-term memory. Professional knowledge, life experience, values, relationships — these are held in long-term memory.

Researchers began asking whether AI needed an analogous structure. Critically, the point was not that memory means storage. Human memory involves summarization, abstraction, integration, and the continuous judgment of what is worth retaining. It is an active process, not passive accumulation. That kind of processing was what the field was beginning to reach for.

⸻

### Agent Memory

The problem became more acute in the context of agent research.

An agent is not a single-turn question-answering system. It observes, plans, acts, records results, and judges again — repeating this cycle hundreds of times. The history that accumulates is enormous.

Consider a software development agent. Hundreds of design decisions. Thousands of code changes. Countless errors and corrections. If all of this is retained, the context becomes unmanageable. But if important decisions are lost, the agent goes wrong: it loses track of its goal, repeats earlier mistakes, contradicts its prior reasoning, and revisits problems it had already solved.

Agent Memory emerged as a response to this challenge — research into enabling agents to accumulate experience, reference it when needed, and avoid repeating the same failures.

⸻

### The Turn Toward Context Engineering

Through all of this, the field arrived at a more fundamental insight.

The problem was not the prompt. The problem was the context itself.

Prompt Engineering had been the dominant framing for a time. How should instructions be written? What examples should be included? But as agent and long-term memory research advanced, it became clear that something else mattered more.

What goes into the context? What gets left out? What takes priority? In what order is information presented?

How much of what information is placed into the context in what sequence turned out to have a significant effect on model performance. Designing the context itself — not just the prompt — was what actually mattered. This became what is now called Context Engineering.

⸻

### A Shift in Thinking

Tracing this arc, the shift in how the field thought becomes clear.

The starting point was: remember everything. Massive context. Massive knowledge. Massive history. Hold onto all of it.

Lost in the Middle revealed the limits of that approach. The research that followed moved in a different direction: retrieve only what is needed. Retain only what is important. Organize past experience. Surface it at the right moment.

In other words, the field moved from an era of expanding context to an era of managing context.

⸻

### What Lost in the Middle Left Behind

Lost in the Middle was not a dramatic paper. It announced no new model. It set no benchmark records.

And yet its influence was substantial.

The paper posed a question to the field: what matters is not how much information you can hold — it is how much of the important information you can actually use.

That question led to RAG, Long-Term Memory, Agent Memory, and Context Engineering.

And the question continued further. Why can humans collaborate for months and years without losing the thread? Why does AI get lost partway through a long conversation? These problems reach beyond search and memory. They connect to something more fundamental about intelligence itself.

---

## The Deeper Problem: Why AI Gets Lost

### Why Personal AI Is So Hard

Lost in the Middle is most often discussed as a paper about long context. Where in a document does information need to be placed for performance to degrade? How does a model actually make use of a long document? Is context length genuinely effective?

These are the technical questions it is usually introduced to answer, and they are not wrong framings. The paper was a genuine turning point in long-context research.

But its deeper importance lies elsewhere.

What Lost in the Middle revealed was the difficulty of sustained intellectual activity over time. Not the problems visible in a single-turn exchange. The problems that only emerge in collaborative work that continues for hours, days, weeks, or months. Getting lost. That is the phenomenon it named.

To understand why this matters, it helps to look first at how human collaboration actually works.

⸻

### Why Human Collaboration Works

Human collaboration across time is a remarkable thing.

Research teams. Companies. Software development projects. At the start, no one shares the same information. Purposes are articulated. Backgrounds are explained. Roles are assigned. Discussions accumulate. Failures happen. Adjustments are made. Successes are built on.

Through this process, repeated over time, a shared understanding gradually forms. What once required explanation no longer does. A word or a phrase communicates what would previously have taken a paragraph. Detailed background no longer needs to be rehearsed before every exchange. The efficiency of collaboration rises sharply because of this shared understanding.

What is striking, though, is that the vast majority of this shared understanding is never written down.

⸻

### Tacit Knowledge as a Vast Context

The philosopher Michael Polanyi wrote:

*We know more than we can tell.*

This is the concept he called tacit knowledge — and it is one he himself originated. Humans carry an enormous body of knowledge, but they do not articulate most of it in language.

Consider a team that has worked together for years. "It's the same as that situation" communicates instantly. "It's the pattern that failed before" is understood without elaboration. "Let's go in the direction we used that time" establishes shared orientation with a single phrase.

Behind each of these exchanges lies an enormous accumulation of background: past meetings, failed projects, shared successes, interpersonal history, organizational culture. All of it compressed into a few words. None of it written in any meeting record.

Human collaboration is built on top of this vast, implicit context.

⸻

### Humans Do Not Remember Everything

What is crucial here is that humans do not remember everything. Quite the opposite.

We forget most of what we encounter. The scenery from yesterday. A conversation from last week. Emails from several years ago. Almost none of it can be recalled.

And yet collaboration continues to function. Why?

Because humans compress information. Experience is summarized. It is abstracted. It is connected to other experience. What matters is retained. What does not is released.

Humans do not hold a massive, unprocessed context. They hold a massive experience, organized. That distinction matters enormously.

⸻

### Context Accumulates

In long-running collaborative work, the volume of information grows faster than most people expect.

Consider a research project. At the start, there is only the objective. Then a hypothesis is added. Then experimental results. Then records of what failed. Then the accumulated discussion. Then a growing body of references. Then new ideas that emerged along the way. Within months, the history is enormous.

Software development follows the same pattern. Design decisions. Specification changes. Bug fixes. Customer requests. Technical constraints. Edge cases. All of it stacking up.

What matters is that this information does not simply accumulate in a pile. It forms a network. Past decisions constrain future ones. Earlier failures eliminate certain options. Context is not a log. It is a complex web of meaning.

⸻

### Where AI Gets Lost

Bringing the focus back to AI: conversations with AI begin smoothly enough.

A few turns are no problem. A dozen turns are manageable. But as the conversation extends, something shifts.

Important constraints are forgotten. Proposals contradict earlier decisions. Ideas that were already rejected come back around. Background that has been explained multiple times is no longer being used.

From a human perspective, this is puzzling. The information is there. It is in the conversation history. It is in the context. And yet it cannot be applied.

This is exactly what Lost in the Middle described. The information has not disappeared. But the model can no longer reach the meaning it carries.

AI gets lost in the middle of a document. In extended conversations, it gets lost in the conversation itself.

⸻

### What Lost in the Middle Actually Meant

Lost in the Middle is not a benchmark paper. It is not a performance evaluation of long context.

Its real significance was making visible the limits of long-term intelligence.

AI can hold knowledge. AI can reason. AI can write code. AI can summarize papers. But maintaining coherent context over time is a separate problem entirely.

For the first time, a gap became clear: the volume of information a system holds and the intelligence it can demonstrate are not the same thing.

Possessing large amounts of information is not the same as being able to use what is important within it. Holding an extensive conversation history is not the same as understanding what that history means.

Lost in the Middle made that difference explicit.

⸻

### The Wall Agent Research Hit

The same problem became more acute in agent research.

An agent is not a conversational system. It observes. Plans. Acts. Records results. Adjusts. Tries again. The history this generates is vast.

In a software development agent, hundreds of design judgments accumulate. Thousands of code changes. Countless errors and corrections. Holding all of it is not feasible. But losing the important parts causes serious problems.

The agent loses track of its goal. It repeats earlier failures. It contradicts its previous reasoning. It returns to problems it had already solved. This is what it means for an agent to get lost. And the problem is a direct extension of what Lost in the Middle had already identified.

⸻

### What People Actually Want from Personal AI

This brings Personal AI into the picture.

What do most people actually expect from a Personal AI?

Not a single-turn question-answering system. Not a search engine. Not a text generation tool.

What people genuinely want is a continuous partner — something that understands them, remembers their past conversations, knows what they are currently working toward, recalls their earlier setbacks, and is capable of building a relationship over time.

That expectation is extraordinarily difficult to meet. Human relationships, even between people, are built on an enormous foundation of shared tacit knowledge. Replicating that in an AI system is not a matter of adding more memory.

⸻

### The Real Challenge of Personal AI

Building a Personal AI requires more than increasing context. More than adding long-term memory. More than a better retrieval system.

What is required is the ability to judge what is important, decide what to retain, determine what to let go, and surface the right information at the right moment.

These are activities humans perform continuously, without thinking. That is why Personal AI is hard. The problem is not memory capacity. It is not knowledge volume. It is the maintenance of context — sustained, coherent, meaningful context — across time.

⸻

### Does AI Actually Understand?

Lost in the Middle opens onto a still larger question.

AI can read. AI can summarize. AI can explain. AI can reason.

But does it actually understand?

If performance changes substantially based solely on where key information sits within a document, what are we actually observing? Is it understanding? Or is it behavior that looks like understanding from the outside?

⸻

### The Potemkin Understanding

There is a famous story about the Russian Imperial statesman Grigory Potemkin. The account holds that he arranged for the construction of fake villages along a route that Empress Catherine the Great would travel during an inspection — elaborate facades built to create the appearance of prosperous settlements that did not actually exist.

Whether the story is fully accurate is debated by historians. But the term "Potemkin village" survived and entered the language. It refers to something that presents an impressive appearance while lacking genuine substance — a façade that looks complete.

A parallel question exists for AI — and it is what I would call "Potemkin Understanding."

It can explain things fluently. It appears logical. It seems to understand.

But is genuine understanding taking place inside? Or does only the structure of understanding exist — the surface, without the interior?

Lost in the Middle was exactly the paper that pressed this question into focus. It demonstrated a significant gap between the ability to read information and the ability to actually use it. And that gap is not merely a long-context problem. It is a problem that cannot be avoided when thinking seriously about what LLMs do and do not understand.

⸻

The problem of AI getting lost is not a context length problem.

It is not something that RAG or Memory systems can fully resolve.

It is a problem rooted in the gap between holding information and understanding it — a gap that has not yet been closed.

What Lost in the Middle showed was the existence of that gap itself.

No matter how much information is provided, AI gets lost in the middle of a long document. No matter how long the conversation runs, important context eventually fades from reach.

That problem has not been solved.

At the frontier of that question — "what does understanding mean?" — lies the current edge of AI research.
