---
title: "Potemkin Understanding — Do LLMs Really Understand?"
date: "2026-06-08"
excerpt: "Do AI systems genuinely understand, or do they merely appear to? From the Chinese Room and the grounding problem to humanity's own Illusion of Explanatory Depth, this article examines one of the deepest questions in AI research."
lang: "en"
tags: ["research", "opinion"]
---


---

## Introduction

Since the release of ChatGPT at the end of 2022, the way people think about AI has changed dramatically.

In the past, AI was primarily seen as a tool for automating specific tasks.

Classifying images.

Recognizing speech.

Playing chess or Go.

Translating between languages.

These systems were designed for narrow purposes and were not something people would naturally converse with.

Today, however, millions of people interact with ChatGPT, Claude, and Gemini on a daily basis.

They ask questions.

Seek advice.

Organize ideas.

Write software.

Read research papers.

Some even turn to AI for life advice.

And throughout these interactions, many people arrive at the same conclusion:

> Maybe AI actually understands.

This is not a strange reaction.

If anything, it is a perfectly natural one.

When you explain a complex problem to ChatGPT, it can reorganize the information and explain it back to you in a clearer form.

When you give Claude a long document, it can identify the key arguments and summarize them.

When you provide Gemini with large collections of material, it can synthesize information across multiple sources.

These behaviors look remarkably similar to human intellectual activity.

The problem is that we can never directly observe understanding itself.

We cannot look inside another person's mind.

We cannot directly verify whether someone truly understands something.

All we can observe are their words and actions.

That is why we naturally assume that someone understands when they can answer questions appropriately, explain complex ideas, engage in discussion, and solve problems.

By those standards, modern LLMs increasingly appear to qualify.

But is that really what is happening?

Do these systems genuinely understand?

Or do they merely appear to understand?

This question is not merely philosophical.

It lies at the heart of many of the most important debates in modern AI research.

Long-term memory.

Agents.

Personal AI.

Self-models.

World models.

Many of the topics currently driving AI research ultimately connect back to this same question.

And there is one concept that provides a particularly useful lens through which to examine it:

**Potemkin Understanding.**

---

## The Question Raised by *Lost in the Middle*

In the previous article, we explored the paper *Lost in the Middle*.

At first glance, it appears to be a study about long-context performance.

In reality, however, it raised a much deeper issue.

Around 2023, the AI industry entered a race toward ever-larger context windows.

GPT-4.

Claude.

Gemini.

Every major model developer competed to expand the amount of context their systems could process.

The era of a few thousand tokens was over.

Then came tens of thousands.

Hundreds of thousands.

Eventually, millions of tokens.

The ability to ingest entire books, large codebases, or extensive collections of documents became a new benchmark of capability.

At the time, many people assumed that larger context windows would naturally lead to smarter AI.

A larger context meant more information.

More information meant more knowledge.

And more knowledge should mean better performance.

It was an intuitive assumption.

But *Lost in the Middle* challenged that assumption.

Researchers embedded relevant information at different positions within long documents and tested whether models could reliably retrieve it.

The results were surprising.

Information placed near the beginning of a document was relatively easy for models to find.

Information placed near the end was also relatively easy to retrieve.

But information buried in the middle was often overlooked.

The models possessed the information.

Yet they frequently failed to use it.

That distinction matters.

Even if a model can process a million-token context window, it does not necessarily mean it can make meaningful use of everything inside it.

Possessing information and using information are not the same thing.

And taking one more step:

Using information and understanding information are not the same thing either.

*Lost in the Middle* is often remembered as a paper about the limitations of long-context models.

But perhaps its deeper contribution was forcing us to revisit a much older question:

What does it actually mean to understand?

---

## Information Is Not the Same Thing as Understanding

Humans frequently confuse knowledge with understanding.

The two are related, but they are not identical.

Think back to your school days.

Before an exam, students memorize formulas.

Vocabulary words.

Historical dates.

Practice problems.

As a result, test scores improve.

But higher scores do not necessarily mean deeper understanding.

Consider mathematics.

A student may memorize differentiation formulas.

They may memorize integration formulas.

But can they explain why those formulas work?

Can they describe the assumptions behind them?

Can they identify situations where they fail?

Many cannot.

History provides another example.

A student may memorize dates.

Names.

Events.

Yet still struggle to explain why those events occurred, why people made certain decisions, or how history might have unfolded differently under other circumstances.

Knowledge exists.

Understanding may not.

In cognitive science, understanding is generally viewed as something more than information storage.

Understanding involves connecting concepts, forming abstractions, and applying them to unfamiliar situations.

People who genuinely understand something can explain it.

Predict outcomes.

Transfer their knowledge to new contexts.

Generate counterexamples.

Solve novel problems.

That is why memorization and understanding are different.

Information and understanding are different.

Knowledge and intelligence are different.

So what about LLMs?

ChatGPT can explain concepts.

Claude can summarize complex documents.

Gemini can synthesize information across multiple sources.

They can even respond to problems they have never encountered before.

Sometimes they produce surprisingly creative solutions.

If this were merely memorization, such behavior would be difficult to explain.

That is precisely why the debate continues.

Is this understanding?

Or is it something that merely resembles understanding?

---

## Potemkin Villages

This brings us to the idea of Potemkin Understanding.

The term traces its roots back to eighteenth-century Russia.

According to a famous story, the Russian statesman Grigory Potemkin constructed fake villages to impress Empress Catherine II during her inspection of newly acquired territories.

The buildings appeared prosperous.

The settlements looked inhabited.

From a distance, everything seemed successful and thriving.

But according to the legend, much of it was little more than a facade.

Whether the story is historically accurate remains a matter of debate.

What matters is the metaphor that emerged from it.

Something can appear genuine from the outside while being hollow within.

This became known as a **Potemkin Village**.

Over time, the concept spread far beyond history.

It is now used in politics.

Economics.

Organizational management.

Software development.

Any situation where appearances suggest substance while the underlying reality is missing.

The idea of **Potemkin Understanding** applies the same metaphor to intelligence.

A system appears to understand.

Yet whether genuine understanding exists beneath the surface remains unclear.

Perhaps understanding is absent entirely.

From the outside, the distinction may be impossible to detect.

The behavior looks convincing.

The responses seem intelligent.

But what is actually happening inside?

That uncertainty lies at the core of Potemkin Understanding.

---

## Why Does ChatGPT Appear to Understand?

At this point, it is important to recognize something.

People are not simply being fooled.

There are legitimate reasons why systems like ChatGPT and Claude appear to understand.

When the Transformer architecture was introduced in 2017, researchers did not anticipate where it would eventually lead.

The original goal was relatively modest.

Improve machine translation.

Use attention mechanisms to handle long-range dependencies more efficiently.

That was the primary objective.

But as models grew larger, unexpected capabilities began to emerge.

Text generation.

Translation.

Summarization.

Reasoning.

Code generation.

Knowledge integration.

Mathematics.

Planning.

Conversation.

These abilities extended far beyond what many researchers originally expected.

The phenomenon became known as **emergence**.

As model size crossed certain thresholds, entirely new capabilities seemed to appear.

When GPT-3 was released, many researchers were stunned.

When GPT-4 arrived, the surprise became even greater.

Claude and Gemini reinforced the trend.

These systems no longer looked like simple text generators.

They could engage in discussion.

Perform reasoning.

Combine knowledge from multiple domains.

Handle abstract concepts.

At times, they even appeared to understand humor.

Faced with these abilities, a natural question emerged:

If these systems do not understand, how can they behave in such sophisticated ways?

That question remains unanswered.

And it leads directly to one of the most famous thought experiments in the history of philosophy and artificial intelligence:

The **Chinese Room.**

---

## The Chinese Room

Do AI systems truly understand?

Whenever this question is raised, one famous thought experiment almost always appears in the discussion:

The **Chinese Room**.

This thought experiment was proposed by the philosopher John Searle in 1980.

At the time, ChatGPT did not exist.

Transformers did not exist.

Even the modern Internet had not yet become part of everyday life.

Yet few philosophical arguments are cited as frequently in discussions about LLMs today.

The reason is simple: it touches the heart of the problem.

Imagine the following situation.

You do not know Chinese at all.

You may have seen Chinese characters before.

But you do not understand their meaning.

You cannot read them.

You cannot speak the language.

Now imagine that you are locked inside a room.

Outside the room are native Chinese speakers.

They write questions in Chinese on pieces of paper and pass them into the room.

Naturally, you have no idea what the questions mean.

However, inside the room is an enormous instruction manual.

The manual contains rules such as:

> If you see this symbol, return that symbol.

> If you receive this combination, respond with that combination.

> If you encounter this pattern, return the corresponding pattern.

You do not understand the meaning of any of it.

You simply follow the instructions.

You manipulate symbols according to the rules and pass the results back outside.

The people outside are amazed.

The responses are perfect.

The questions are answered correctly.

Conversations flow naturally.

Complex discussions are possible.

From the outside, it appears as though the person inside the room understands Chinese.

But you do not.

You understand none of it.

So who understands Chinese?

Not you.

Not the instruction manual.

Not any individual part of the room.

Then where, exactly, is the understanding?

Searle's conclusion was straightforward:

> Symbol manipulation is not the same thing as understanding meaning.

No matter how sophisticated the symbol processing becomes, understanding does not necessarily emerge from it.

And today, many people encounter this thought experiment and immediately think:

> Isn't that essentially what an LLM is?

---

## Are LLMs Giant Chinese Rooms?

Modern LLMs are trained on enormous amounts of text.

The Internet.

Books.

Research papers.

News articles.

Source code.

Social media.

In total, the training data amounts to trillions of words.

And the objective of training is surprisingly simple.

Predict the next token.

That is all.

Given:

> "The cat..."

predict the most likely next word.

Given:

> "Today..."

predict the most likely continuation.

Given:

> "Transformers..."

predict what comes next.

Repeat this process an unimaginably large number of times.

Something remarkable happens.

The system learns to write.

It learns to translate.

It learns to summarize.

It learns to reason.

It learns to generate code.

Yet if we look inside the system, what we find is fundamentally an enormous process of symbol manipulation.

So the question remains:

Is there meaning inside?

Is there understanding?

Researchers who support the Chinese Room perspective argue that the answer is no.

LLMs are simply learning statistical relationships.

Word B tends to follow Word A.

Concept X frequently appears alongside Concept Y.

The model accumulates vast numbers of such patterns.

From the outside, it appears to understand.

Internally, however, it is operating on symbols rather than meanings.

This is precisely the concern behind Potemkin Understanding.

The system appears to understand.

But it may not truly understand at all.

Even today, this perspective remains highly influential.

---

## The Problem of Grounding

This brings us to an important concept:

**Grounding**.

Consider the word:

> "apple"

For a human being, an apple is not merely a string of letters.

It is red.

Round.

Sweet.

Fragrant.

Something that can be held.

Something that can be bitten into.

Something with weight.

Something that releases juice when eaten.

The concept is connected to a rich collection of sensory experiences.

In other words, the word "apple" is connected to a real object in the world.

This connection is known as grounding.

LLMs are different.

What is an apple to an LLM?

A token that appears in text.

A token that often occurs near words like:

red,

fruit,

sweet,

tree,

and so on.

Perhaps nothing more.

An LLM has never actually seen an apple.

It has never touched one.

Never eaten one.

Never smelled one.

It knows relationships between words.

But does it have any connection to the world those words refer to?

This is the grounding problem.

---

## The Idea of Embodiment

The grounding debate naturally leads to a related concept:

**Embodiment**.

In cognitive science, many researchers argue that intelligence does not arise solely from the brain.

Humans possess bodies.

We have eyes.

Ears.

Hands.

Feet.

And we interact with the world.

We touch hot objects.

We fall.

We run.

We lift things.

We break things.

We build things.

Through these experiences, we learn what the world is like.

Consider the concept of:

> "heavy"

Humans understand heaviness because they experience it.

They feel gravity.

They feel strain in their muscles.

They attempt to lift objects and sometimes fail.

These experiences give meaning to the concept.

What about an LLM?

It knows how the word "heavy" is used.

It knows the linguistic patterns associated with it.

But it has never actually lifted anything.

It has never experienced weight.

For this reason, some researchers argue that intelligence without a body may never achieve genuine understanding.

This idea is deeply connected to robotics, embodied cognition, and developmental cognitive science.

---

## The Symbol Grounding Problem

The grounding debate was pushed even further by what became known as the **Symbol Grounding Problem**.

In 1990, cognitive scientist Stevan Harnad raised a fundamental question.

Imagine looking up a word in a dictionary.

You look up:

> horse

The dictionary explains it using other words.

For example:

> a large herbivorous mammal

Then you look up:

> herbivorous

Which is explained using more words.

Then you look up those words.

Which lead to even more words.

The chain continues indefinitely.

Words explain words.

Which explain other words.

Which explain still more words.

But where does meaning ultimately come from?

At some point, language must connect to reality.

Otherwise every definition simply floats in midair, referring only to other definitions.

This is the Symbol Grounding Problem.

And it strikes directly at the heart of modern LLMs.

LLMs learn vast amounts of language.

But fundamentally, they learn language from language.

Words from words.

Sentences from sentences.

Symbols from symbols.

If there is no connection to the external world, can that understanding be considered real?

Or is it merely a gigantic Potemkin Village built out of language?

---

## Yet the Debate Does Not End Here

At this point, the conclusion may seem obvious.

LLMs do not understand.

They are Chinese Rooms.

They lack grounding.

They lack embodiment.

Therefore they do not possess genuine understanding.

But the research community is not nearly so unanimous.

The reason is simple.

Systems that supposedly do not understand are beginning to exhibit astonishingly sophisticated behavior.

GPT-4.

Claude.

Gemini.

And the even larger models that will follow.

These systems display capabilities that are increasingly difficult to explain through statistical prediction alone.

If they do not understand, then why can they reason so effectively?

Why can they manipulate abstract concepts?

Why can they integrate knowledge across multiple domains?

This is where the opposing perspective enters the discussion.

Perhaps the most important question is not whether AI understands or does not understand.

Perhaps the deeper question is whether we ourselves truly understand what understanding is.

And, as it turns out, Potemkin Understanding may not be a problem unique to AI.

Human beings themselves are remarkably prone to believing that they understand far more than they actually do.

---

## Responses to the Chinese Room

John Searle proposed the Chinese Room thought experiment in 1980.

More than forty years later, it remains at the center of debates about AI and understanding.

What is important, however, is that the discussion did not end when the Chinese Room was proposed.

In many ways, it was only the beginning.

As soon as Searle published his paper, researchers began offering counterarguments.

What is particularly striking is how many of those arguments resemble today's debates about LLMs almost exactly.

Searle's claim was straightforward.

The person inside the room does not understand Chinese.

Therefore, the room does not understand Chinese either.

No matter how sophisticated the symbol manipulation becomes, it does not automatically produce meaning.

At first glance, the argument is highly persuasive.

But philosophers and cognitive scientists immediately began asking questions.

Is that really true?

What exactly is understanding?

Where does it exist?

Who—or what—is doing the understanding?

A variety of responses emerged from these questions.

---

## The Systems Reply

The most famous response is the **Systems Reply**.

Searle argued that the person inside the room does not understand Chinese.

That may be true.

But critics responded with a different perspective.

Perhaps the understanding does not belong to the person.

Perhaps it belongs to the entire system.

Consider the human brain.

Individual neurons do not understand meaning.

They simply exchange electrical signals.

It would make little sense to point at a single neuron and ask:

> Do you understand Japanese?

The neuron does not understand anything.

Yet the brain as a whole does.

The same reasoning can be applied to the Chinese Room.

Even if the person inside the room does not understand Chinese, perhaps the entire system does.

The person.

The rulebook.

The symbols.

The procedures.

The interactions between them.

Taken together, could the system itself be the thing that understands?

The argument maps surprisingly well onto modern LLMs.

A GPU does not understand.

Model parameters do not understand.

Individual transistors do not understand.

But what about the complete system?

That question remains unresolved today.

---

### Searle's Counterargument

Of course, Searle anticipated many of these objections.

In particular, he offered a well-known response to the Systems Reply.

Searle argued that treating the entire room as a single system does not actually solve the problem.

Why?

Because there is still no identifiable entity that genuinely understands Chinese.

To make his point more vivid, Searle proposed an even more extreme scenario.

Imagine that the person inside the room memorizes the entire rulebook.

The paper instructions are no longer needed.

The room itself is no longer needed.

Whenever a Chinese question arrives, the person performs all of the symbol manipulation mentally and produces the correct response.

From the outside, this individual would be indistinguishable from a fluent Chinese speaker.

Yet Searle insisted that nothing essential has changed.

The person still does not understand Chinese.

If that is true, then what exactly has been gained by saying that "the system understands"?

Has understanding actually been explained?

Or has the problem merely been relocated?

This counterargument made the debate even more complicated.

Does understanding belong to an individual?

Does it belong to a system?

Or is the question itself fundamentally misguided?

In many ways, modern debates about LLMs remain stuck at precisely this point.



---

## The Robot Reply

Another influential response is known as the **Robot Reply**.

Critics argued that the Chinese Room suffers from a major limitation.

It has no contact with the world.

The room is closed.

It cannot see.

It cannot touch.

It cannot move.

In other words, it lacks grounding.

So researchers proposed a modification.

What if the Chinese Room were embedded inside a robot?

Imagine a system equipped with cameras.

Microphones.

Arms.

The ability to move through the world.

The ability to observe its environment.

Manipulate objects.

Interact with reality.

In that case, the situation changes dramatically.

The system would no longer be engaged in pure symbol manipulation.

The word "apple" could become associated with actual experiences.

A red object.

A round shape.

A particular weight.

Something that can be eaten.

Something that can be picked up.

In other words, the symbol would become connected to the world.

That is grounding.

That is embodiment.

And this idea continues to influence modern AI research.

Part of the excitement surrounding humanoid systems such as Tesla Optimus and Figure AI stems from exactly this line of thinking.

Perhaps intelligence requires not only language, but also a body capable of interacting with reality.

---

## The Brain Simulator Reply

Another fascinating response is the **Brain Simulator Reply**.

Imagine that we could perfectly simulate a human brain.

Every neuron.

Every synapse.

Every signal.

Every interaction.

Everything reproduced in exact detail.

Would that simulation understand?

Searle argued that it still would not.

From his perspective, the simulation would remain a form of symbol manipulation.

Critics were unconvinced.

If the structure is identical,

and the behavior is identical,

then on what basis can we claim that understanding is absent?

This question has become deeply important not only in AI, but also in consciousness research.

And in modern AI discussions, it appears in a familiar form:

Could sufficiently large neural networks give rise to understanding through their internal organization alone?

---

## The Other Minds Reply

The final response worth examining is the **Other Minds Reply**.

This argument begins with a surprisingly simple observation.

We cannot prove that other people understand anything.

Friends.

Family members.

Colleagues.

There is no direct way to observe understanding inside another mind.

All we can observe is behavior.

People answer questions.

Hold conversations.

Solve problems.

Express emotions.

Based on those behaviors, we infer that understanding exists.

But we never directly observe it.

If that is true, then should AI be held to a fundamentally different standard?

Why should understanding in humans be accepted on the basis of behavior, while understanding in AI requires a stronger form of proof?

This is the central challenge posed by the Other Minds Reply.

---

## The Perspective of Those Who Believe LLMs Understand

Taken together, these responses reveal the position of those who argue that AI may genuinely understand.

Their focus is not primarily on internal mechanisms.

Instead, they emphasize observable capabilities.

What is understanding?

Perhaps it is not some mysterious substance hidden inside a system.

Perhaps it is a capacity expressed through behavior.

If a system can reason,

learn,

integrate knowledge,

and solve novel problems,

perhaps it is reasonable to call that understanding.

Of course, this is not proof.

But it is difficult to dismiss entirely.

After all, modern LLMs display capabilities that would have been almost unimaginable when the Chinese Room was first proposed in 1980.

---

## Emergence

A key concept in this debate is **emergence**.

Before the Transformer era, many researchers assumed that AI capabilities would improve in a relatively linear fashion.

Make a model larger.

Performance improves slightly.

Make it larger again.

Performance improves a little more.

But reality turned out to be far more complicated.

Beyond certain scales, entirely new capabilities appeared to emerge.

Translation.

Summarization.

Reasoning.

Code generation.

Mathematics.

Knowledge integration.

Abilities that had not previously existed suddenly became possible.

Researchers described this phenomenon as emergence.

Supporters of the understanding hypothesis point to this idea.

Perhaps understanding itself is an emergent property.

Individual neurons do not understand.

Yet the brain as a whole does.

If that is possible, then perhaps understanding can also emerge from sufficiently large neural networks.

This possibility has not been proven.

But neither has it been ruled out.

That is precisely what makes the debate so difficult.

---

## World Models

In recent years, another concept has become increasingly important:

**World Models.**

A world model is an internal representation of the structure of reality itself.

Humans possess such models.

For example, if you throw a ball into the air, you expect it to fall back down.

You do not need to know the equations of gravity.

You can still predict what will happen.

Why?

Because you possess an internal model of how the world works.

Recently, researchers have begun asking whether LLMs might possess something similar.

Countries.

Companies.

Markets.

Social relationships.

Physical laws.

Institutions.

Perhaps these complex structures are compressed into the model's internal representations.

If that is true, then an LLM is doing more than arranging words.

It may be constructing an approximation of reality itself.

And that possibility fundamentally challenges our definition of understanding.

---

## Othello-GPT

One of the most famous examples comes from the **Othello-GPT** study.

Researchers trained a model using nothing but game records from Othello.

The rules were never explicitly provided.

The board state was never explicitly provided.

Only move sequences were used.

Yet when researchers examined the model's internal representations, they found something surprising.

The model appeared to be tracking the state of the board.

In other words, while it had been trained only to predict the next move, it seemed to develop an internal representation of the game itself.

This result attracted significant attention.

Because it suggested that world models may emerge naturally from prediction.

A system may learn to model reality simply because doing so improves its ability to predict what comes next.

---

## Mechanistic Interpretability

At Anthropic, OpenAI, and many research institutions, another field has gained momentum:

**Mechanistic Interpretability.**

The goal is to dissect AI systems and understand what is happening inside them.

What concepts emerge within neural networks?

What does each neuron represent?

Which circuits contribute to reasoning?

How is information organized internally?

Researchers are attempting to answer these questions by examining models at an increasingly fine-grained level.

And what they are discovering is often more complex than expected.

Representations related to countries.

Languages.

Mathematics.

Geography.

Historical figures.

Social structures.

The evidence increasingly suggests that something richer than simple word association may be taking place.

Of course, none of this proves understanding.

But it does make one explanation increasingly difficult to maintain:

The idea that LLMs are merely sophisticated parrots repeating patterns without any deeper structure.

At this point, the debate returns to its starting point.

If world models truly exist inside these systems, does understanding emerge along with them?

Or are we simply looking at a larger and more convincing Potemkin Village?

---

## Humans Engage in Potemkin Understanding Too

Up to this point, Potemkin Understanding may sound like a problem unique to AI.

LLMs appear to understand.

Yet they may not actually understand.

That, after all, is the essence of Potemkin Understanding.

That is certainly one way to look at it.

But there is a more interesting side to this discussion.

Human beings themselves may engage in Potemkin Understanding as well.

Most of the time, we believe that we understand things.

We read the news.

We read books.

We watch explanatory videos.

We attend meetings.

We follow discussions on social media.

And naturally, we come away with the feeling that we understand.

But do we?

Consider a few simple questions.

How does a smartphone actually work?

Why does the Internet function?

How does GPS determine your location?

Why can a microwave oven heat food?

How do automobile brakes work?

We use these technologies every day.

We feel as though we understand them.

Yet if someone asks us to explain them in detail, many of us struggle.

Of course, specialists can explain them.

But most people possess only a high-level understanding.

They do not truly understand the underlying mechanisms.

And yet they still feel as though they do.

This is not laziness.

It is a feature of human cognition itself.

What is particularly fascinating is that this phenomenon has been demonstrated experimentally in cognitive science.

---

## The Illusion of Explanatory Depth

This phenomenon is known as the **Illusion of Explanatory Depth**.

It refers to the tendency for people to believe they understand something far more deeply than they actually do.

Cognitive scientists Leonid Rozenblit and Frank Keil conducted a series of influential experiments on this topic.

Participants were asked about the workings of familiar everyday objects and systems.

For example:

Why does a toilet flush?

How does a zipper work?

How does a bicycle turn?

Why can a helicopter fly?

Most participants initially reported that they understood these things.

Then they were asked to provide a detailed explanation.

At that point, something interesting happened.

They struggled.

Their explanations stalled.

They became vague.

They discovered gaps in their own understanding.

And when researchers later asked them to rate their level of understanding again, those ratings dropped significantly.

In other words, people often believe they understand something.

But in reality, they may only possess the feeling of understanding.

That is the Illusion of Explanatory Depth.

---

## How Much Do We Really Understand?

This idea can be somewhat uncomfortable.

After all, most of us like to think of ourselves as rational and knowledgeable.

Yet the reality is that much of our understanding depends on society.

Modern people fly on airplanes.

But very few can design one.

We visit hospitals.

But most of us do not truly understand medicine.

We use smartphones.

Yet only a small number of people can explain how semiconductors are manufactured.

Human beings rely on a vast network of distributed knowledge.

No individual understands everything.

Some cognitive scientists describe this distinction as the difference between **Knowledge in the Head** and **Knowledge in the World**.

Knowledge does not exist solely inside individual minds.

It is distributed across society.

We borrow from it constantly.

And because we can access it so easily, we sometimes mistake society's understanding for our own.

That is one reason why the feeling of understanding can be so deceptive.


This phenomenon is not limited to everyday technologies.

The same pattern appears in politics.

It appears in economics.

And it appears in discussions about AI.

Consider political debates.

People often hold strong opinions about public policy.

Yet when asked to explain the details of institutional design or the full consequences of a particular policy, their certainty frequently begins to fade.

Economics provides similar examples.

Tax cuts.

Monetary policy.

Regulatory reform.

Many people passionately support or oppose these ideas.

Yet explaining the underlying causal mechanisms and potential side effects is far more difficult.

The same is true in AI.

Will AGI emerge?

Do LLMs truly understand?

Can consciousness arise in machines?

People often have strong views on these questions.

But when the discussion is pushed deeper, the foundations of those beliefs frequently become unclear.

Potemkin Understanding may not be an AI problem alone.

It may be a cognitive phenomenon that permeates modern society itself.



---

## How Different Are AI and Humans?

At this point, a curious question emerges.

If humans themselves often mistake familiarity for understanding, why should LLMs be treated differently?

This is not a rhetorical question.

It is a serious one.

A number of AI researchers have raised exactly this issue.

Humans possess incomplete understanding.

Humans misunderstand things.

Humans form false beliefs.

Humans experience cognitive illusions.

Yet despite these limitations, we still regard humans as understanding beings.

If that is the case, is it fair to demand a standard of understanding from AI that no human can fully satisfy?

This does not mean that LLMs therefore understand.

That is not the argument.

In fact, the more important realization may be the opposite.

Humanity still lacks a clear definition of understanding itself.

And that may be why this debate continues without resolution.

---

## Connecting to *Inherited Flaws*

This discussion naturally connects to an earlier paper:

**Inherited Flaws**.

The central question of that paper was simple:

Why do LLMs reproduce human-like flaws?

The conclusion was relatively straightforward.

LLMs learn from human-produced text.

As a result, they inherit not only human knowledge, but also human cognitive limitations.

Cognitive biases.

Emotional reasoning.

Social conformity.

Overconfidence.

Self-justification.

And perhaps the tendency to believe we understand things more deeply than we actually do.

If humans engage in Potemkin Understanding, then LLMs may reproduce the same pattern.

Anyone who has spent significant time interacting with ChatGPT or Claude has likely encountered this phenomenon.

The explanation sounds convincing.

The reasoning appears logical.

The language is fluent.

The confidence is persuasive.

Yet upon closer examination, problems sometimes emerge.

The assumptions may be wrong.

The facts may be inaccurate.

The reasoning may break down.

This is more than a simple hallucination problem.

It may reflect something deeper:

The reproduction of a fundamentally human ability—the ability to generate plausible explanations regardless of whether genuine understanding exists beneath them.

Viewed from this perspective, Potemkin Understanding may not be a new problem created by AI.

It may be an inherited human problem.

---

## Potemkin Understanding Through the Lens of SOMA

At this point, it is useful to shift perspectives.

The core concern behind SOMA is not model performance.

It is not benchmark scores.

It is not test accuracy.

It is not context-window size.

Those things matter.

But from the perspective of understanding, something else may be even more important.

Continuity.

Can a system remember yesterday's experiences?

Can it learn from past failures?

Can it maintain stable values?

Can it pursue long-term goals?

Can it preserve a coherent identity over time?

Modern LLMs are extraordinarily capable.

Yet they are also profoundly forgetful.

A session ends, and the memory disappears.

A conversation closes, and the experience is lost.

Past interactions are not retained.

In that sense, today's LLMs are both:

A genius overflowing with knowledge.

And a being that continually loses its memory.

If understanding is fundamentally connected to continuity, then perhaps the real challenge is not intelligence at all.

Perhaps it is memory.

And that question naturally leads toward research on:

Long-term memory.

Personal AI.

Persistent identity.

Self-models.

And the broader challenge of creating systems that remain coherent over time.

---

## Conclusion

Do LLMs truly understand?

At present, the research community does not have a definitive answer.

The Chinese Room remains relevant.

The grounding problem remains unresolved.

Embodiment remains an open question.

At the same time, the capabilities demonstrated by GPT-4 and later systems are increasingly difficult to explain through symbol manipulation alone.

Evidence suggesting the existence of world models continues to accumulate.

Research into internal representations continues to advance.

That is why the debate persists.

But perhaps the most important takeaway from this article is not whether LLMs understand.

Nor whether they do not.

The deeper issue is that we ourselves may not fully understand what understanding is.

Potemkin Understanding may be an AI problem.

But before that, it may be a human problem.

And for that reason, AI serves as a mirror—one that reflects our own minds back at us.

---

## Next: Has AI Begun to Understand?

In recent years, headlines and discussions have increasingly included claims such as:

Claude has achieved understanding.

GPT has become conscious.

AI has developed emotions.

AI has begun to exhibit self-awareness.

Has something genuinely changed?

Or are we simply interpreting these systems differently?

In the next article, we will explore this question through the lenses of:

- Grounding
- Embodiment
- Theory of Mind
- World Models
- Self Models
- Emergence

And ask a deceptively simple question:

**Has AI truly begun to understand?**
