---
title: "MemGPT — Why Does AI Forget? The Paper That Tried to Give LLMs a Memory OS"
date: "2026-05-30"
excerpt: "AI is remarkably intelligent. Yet at the same time, it is surprisingly forgetful. MemGPT, published in 2023, attempted to give LLMs a memory hierarchy — the ability to remember, recall, and manage information over time."
lang: "en"
---

Have you ever had an experience like this while using ChatGPT?

You have been discussing a topic for hours, and then suddenly it gives a response that makes you wonder: "Did it just forget what we were talking about a moment ago?"

AI is remarkably intelligent. It can write articles, generate code, summarize research papers, and even provide advice to people.

Yet at the same time, it is surprisingly forgetful.

Why?

One answer can be found in the 2023 paper **MemGPT: Towards LLMs as Operating Systems for Memory**.

MemGPT is not simply a study about attaching a database to an AI system. More fundamentally, it is a study that attempted to give LLMs a mechanism for managing their own memory.

---

## Does AI Really "Remember"?

Many people believe that ChatGPT has memory in the same way humans do.

However, modern LLMs fundamentally operate within a limited workspace called the **Context Window**. They predict the next word based on the information currently contained within that space.

In other words, for an LLM, what matters is not whether something was discussed in the past. What matters is **whether it is visible inside the Context Window right now**.

As a conversation grows longer, older information gets pushed out of the Context Window. Once that happens, the AI can no longer reference that information.

This is slightly different from human forgetting. Humans sometimes fail to recall information. In contrast, with LLMs, the problem is often that the information is simply no longer visible.

AI does not forget because it has poor memory. **It forgets because it cannot see the information.**

---

## A Computer Analogy

When explaining MemGPT, a computer analogy is often used.

- **LLM** = The computational component
- **Context Window** = The working area, or RAM
- **External Memory** = External storage, such as SSDs or HDDs

What would happen if a computer only had RAM and could not use an SSD or HDD? It could perform temporary tasks. However, it would be unable to store information over the long term.

Modern LLMs faced a similar problem. Despite possessing extraordinary computational capabilities, they could only work with information that fit within their working area.

MemGPT introduced an idea similar to virtual memory in operating systems. A limited Context Window is managed together with external memory. Important information is stored externally and brought back only when needed. That is the fundamental idea behind MemGPT.

---

## How Did AI Move Toward Memory?

MemGPT did not appear out of nowhere. Before it came a series of developments that gradually transformed AI from "a model that simply answers questions" into "a system connected to the external world."

RAG → ReAct → MemGPT → Generative Agents → Today

This is not merely a list of technologies. Each emerged from the limitations of the one before it.

---

## RAG — Giving AI the Ability to Search

The first major turning point was **RAG (Retrieval-Augmented Generation)**.

The basic idea is simple. Before answering, the LLM searches external documents. The search results are then placed into the Context Window and read by the model before it generates a response.

This allowed AI systems to answer questions about information that was not present during training — internal company documents, research papers, manuals, news articles, personal notes.

RAG gave AI the ability to **look things up**. However, RAG is not memory. In many ways, it resembles performing a search every time information is needed — less like remembering something and more like using Google whenever a question arises.

Several problems remained:

- The AI itself does not decide what should be remembered
- If the retrieval query is poor, important information may never be found
- RAG does not continuously manage conversational flow or long-term intentions

RAG gave AI **external knowledge**. However, it had not yet reached the stage where AI could manage **its own memory**.

---

## ReAct — Giving AI the Ability to Think and Act

The next important development was **ReAct (Reasoning and Acting)**.

Until then, LLMs primarily responded to questions with text. In real-world tasks, however, simply answering is not enough. An AI may need to search the web, perform calculations, read files, call APIs, and change its next action based on what it observes.

ReAct gave LLMs the following loop:

Think → Act → Observe Results → Think Again → Decide the Next Action

This brought LLMs closer to becoming agents rather than simple text generators. If RAG was an AI that could read external knowledge, then ReAct was an AI that could interact with the external world.

However, ReAct also had limitations. It could act, but it did not truly remember over the long term. It struggled to retain previous failures and was not particularly good at continuously updating user preferences.

In other words, ReAct gave AI **hands and feet**. But memory was still insufficient.

---

## MemGPT — Giving AI a Memory Hierarchy

This is where MemGPT enters the story.

RAG allowed AI to retrieve external information. ReAct allowed AI to think while acting. Yet a major problem still remained: AI struggled to manage what it should remember, what it should forget, and what it should recall during long-running conversations and tasks.

MemGPT treated the LLM's Context Window as if it were a computer's RAM, then introduced a larger **External Context** outside of it. In other words, it gave the LLM a **memory hierarchy**.

- **Main Context** — The working area currently visible to the LLM
- **External Context** — A long-term storage area outside the Context Window

This design eliminates the need to cram everything into the Context Window. Short-term information stays in the Main Context. Long-term information is stored in the External Context and retrieved only when needed.

---

## How Does MemGPT Work?

At a high level, MemGPT operates like this:

User speaks → LLM reads the content → If important, save to external memory → If necessary, search external memory → Return retrieved information to Main Context → Generate a response

In a traditional RAG system, retrieval is triggered by the user's question. In MemGPT, however, the LLM itself makes the decision:

- Should this information be remembered?
- Will it be needed later?
- Should I recall something right now?
- As the Context Window fills up, what should be moved out?

**RAG is a retrieval system. MemGPT is closer to a memory management system.**

---

## Main Context and External Context

The **Main Context** is the area currently visible to the LLM. It contains recent conversation history, the current task, important instructions, and information immediately needed. In human terms, it is similar to working memory — limited in size and unable to contain everything.

The **External Context** is a storage area outside the Context Window. It can store past conversations, long-term important information, user-related information, and reference materials. However, information stored here is not constantly visible. It must be retrieved and brought back into the Main Context when needed.

MemGPT is not an AI that remembers everything at all times. More accurately, it is an AI that externalizes memory so that information can be recalled when necessary.

---

## How Is MemGPT Different from RAG?

This is one of the most commonly misunderstood points.

MemGPT also searches external memory, so it can appear similar to RAG. However, the underlying purpose is different.

In RAG, external databases are primarily used for knowledge retrieval — the user asks a question, relevant documents are retrieved, and an answer is generated.

In MemGPT, external memory is not merely a knowledge repository. It is a memory space used to store conversations and experiences for future reuse. More importantly, the LLM itself decides when memory operations should occur.

- RAG is about **searching**
- MemGPT is about **remembering**, **recalling**, and **managing memory**

That distinction is significant.

---

## Then Why Does AI Still Forget?

If systems like MemGPT exist, why do AI systems still forget?

**First**, MemGPT is not a standard component of every AI system. Services such as ChatGPT may have their own memory features, but those systems are not MemGPT itself.

**Second**, even with external memory, deciding what should be stored is difficult. Human conversations contain a mixture of important and unimportant information. Store everything, and memory quickly fills with noise. Store too little, and important information is lost.

**Third**, deciding when to recall information is also difficult. Even if information exists in external memory, it is effectively useless if it is never retrieved. Storing information and recalling it at the appropriate time are two separate problems.

**Fourth**, older memories and newer memories can conflict. User preferences change. The AI must determine how much trust to place in older memories — a problem not of retrieval, but of updates, organization, forgetting, and prioritization.

MemGPT is not a technology that completely eliminates forgetting. Instead, it is a paper that demonstrates that **AI systems need mechanisms for managing memory**.

---

## Generative Agents — From Memory to Reflection and Planning

Around the same time as MemGPT, another influential project emerged from Stanford: **Generative Agents**.

Generative Agents explored what happens when AI characters are given memory and allowed to live within a simulated town. The agents followed a process of Observe → Remember → Reflect → Plan → Act.

For example, an agent that repeatedly encounters the same person may reflect: "Perhaps I have a close relationship with this individual." That reflection then influences future behavior — visiting the person later, inviting them to a party, scheduling future interactions.

The important point is that memory becomes more than stored data. It becomes the raw material from which behavior and personality emerge.

While MemGPT focused on **how memory should be managed**, Generative Agents demonstrated **how behavior can emerge from memory**.

---

## Today — From Bigger Models to Better Memory Systems

Looking at this progression, we can see that the focus of AI research has gradually begun to change.

The original question was: how can we make LLMs smarter? For a long time, the answer seemed straightforward — larger models, more training data, longer context windows.

But researchers gradually realized that this approach alone was not enough. Long-term intelligence cannot be achieved by the model alone. It requires memory, context management, action, reflection, and planning.

As a result, modern research is moving beyond simply building larger models toward better memory systems, better context management, and better agent architectures. MemGPT occupies an important position within this transition.

---

## The Real Meaning of MemGPT

The value of MemGPT is not that it solved forgetting once and for all.

Its true significance lies in making the following question impossible to ignore:

**Does intelligence emerge from the model alone?**

Or does it emerge from **Model + Memory + Management System**?

This was a profound shift in perspective. For many years, AI progress was largely framed as a model-scaling problem — make the model larger, train on more data, increase computational resources. MemGPT suggested something different: perhaps intelligence is not solely a property of the model, but also a property of the system surrounding it.

---

## From Attention to Memory

In 2017, the Transformer architecture changed the trajectory of AI with the paper **Attention Is All You Need**. Attention dramatically improved the ability of models to process and relate information, becoming the foundation of modern LLMs.

Today, many researchers see **Memory** as the next major challenge.

AI has learned how to think. But it has not yet learned how to remember a life.

Large language models can reason, write, plan, and solve problems. Yet they still struggle with continuity across long periods of time — maintaining experiences, preferences, goals, and relationships.

MemGPT confronted that problem directly. It was not merely a paper about memory. It was an early vision of what long-lived AI systems might eventually become.

---

## References

- Packer, C., Fang, V., Patil, S. G., Lin, K., Wooders, S., & Gonzalez, J. E. (2023). **MemGPT: Towards LLMs as Operating Systems for Memory**. arXiv:2310.08560. [https://arxiv.org/abs/2310.08560](https://arxiv.org/abs/2310.08560)
- Lewis, P. et al. (2020). **Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks**. NeurIPS. [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)
- Yao, S. et al. (2022). **ReAct: Synergizing Reasoning and Acting in Language Models**. arXiv:2210.03629. [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
- Park, J. S. et al. (2023). **Generative Agents: Interactive Simulacra of Human Behavior**. UIST. [https://arxiv.org/abs/2304.03442](https://arxiv.org/abs/2304.03442)
- Vaswani, A. et al. (2017). **Attention Is All You Need**. NeurIPS. [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

---

*Next: Stanford's Generative Agents — how reflection, planning, and social behavior emerge from memory.*
