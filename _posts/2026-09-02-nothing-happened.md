---
layout: post
title: "Nothing Happened: Extinction Learning and Rejection Sensitivity in ADHD"
permalink: /proposals/nothing-happened.html
author: Silvino Rodrigues
category: Proposals
tags:
  - ADHD
  - RSD
excerpt: >-
  Rejection sensitivity in ADHD is not usually described as an overreaction. It is described as a failure of things to fade. The rejections stay vivid and the thousands of ordinary interactions that went fine never accumulate as counter-evidence. There is now a good account of how a brain learns that a bad thing has stopped coming, and it turns on a signal fired at the precise moment the bad thing fails to arrive. So the question is whether that update runs slowly in ADHD - and whether the fault is a missing signal or a late one.
---

# Nothing Happened <br><small>Extinction Learning and Rejection Sensitivity in ADHD</small>

{% include post-meta.html post=page %}

## The question

Fear extinction is the process by which a learned threat expectancy is updated downward. It is not forgetting. The old memory stays; a new, competing "it is safe now" memory is built alongside it, and it is the mechanism that exposure therapy runs on. [^1]

For that new memory to start forming, the brain has to detect something that did not happen. No shock, no noise, no flash. Nothing is not an event, and yet the absence has to be registered as one.

We now have a good account of how. In mice, dopamine neurons in the ventral tegmental area fire at the exact moment an expected foot shock fails to arrive; silencing them at that instant prevents extinction, and stimulating them at that instant accelerates it. [^2] The equivalent signal has since been found in humans, in the ventral striatum, in people learning that a stimulus is no longer dangerous. [^3][^4]

Rejection sensitivity in ADHD is described in a shape that resembles a failure of exactly this process. Not an overreaction - the clinical and qualitative descriptions are not mainly about the size of the response to a rejection, they are about its permanence. [^5] Old rejections stay retrievable and vivid. Ordinary interactions that went fine do not seem to accrue on the other side of the ledger.

So: **is extinction learning slower in ADHD adults, and is the slowness specific to extinction rather than to acquisition?**

One study has looked at fear circuitry in ADHD, and I will deal with it at length below, because it is both the closest thing to an answer and an inconvenient one. [^6] What nobody has done is ask the question as a question about learning rate, in adults, with rejection sensitivity measured alongside it. [^a]

## Where the question came from

I came to the mouse paper for a different reason, and the thing that stopped me was not the neuroscience. It was a piece of ordinary language quietly coming apart.

Dopamine is popularly the pleasure chemical. It is not. It tracks the gap between what was expected and what arrived. [^7] An unexpected reward produces a burst; a fully predicted one produces almost nothing; an expected reward that fails to arrive produces a dip. The quantity being signalled is surprise, not pleasure.

Run that logic on an aversive expectancy and the conclusion is strange and correct. You expect a shock. No shock comes. That is a better-than-expected outcome, structurally identical to an unexpected reward. Relief and reward share a signal.

Which means the bad thing not happening is an event, and the brain has to catch it, and it has about a second in which to do so.

I made a leap from there, and it was too fast. If ADHD involves compromised dopamine signalling, and safety learning requires a dopamine signal, then safety learning should be impaired in ADHD, and a person whose developmental history is unusually dense with genuine social correction would end up with threat expectancies that were acquired normally and never updated down.

Three things are wrong with that as stated, and working out what they were is most of what this proposal is.

The first is that "ADHD equals less dopamine" is not what the literature says. The second is that the social domain does not obviously supply the bounded window the mechanism needs - a shock has an offset, and a room full of people mostly does not. The third, and the one that took longest, is that the deficit may not be a weak signal at all. It may be a late one. That last correction is where the proposal now sits, and it came from the evidence rather than from me.

## What the evidence actually says

### The mouse result, stated precisely

Salinas-Hernández and colleagues trained mice on a tone that predicted a foot shock, then ran extinction the following day: twenty-five to thirty tones, no shock. [^2] They attacked the omission moment three ways.

Recording single units in the VTA, **25% of putative dopamine neurons fired to the omission during the first ten tones, falling to 7.5% by the last ten** - present while the omission was still surprising, gone once it was expected. That is the prediction-error signature. Neighbouring non-dopamine cells did not do it, and the mice were not simply moving more at that moment.

Fibre photometry in dopamine-specific cells reproduced the signal, and **the size of each animal's signal predicted how fast that animal extinguished**.

Optogenetics then made it causal. Silencing dopamine neurons *at the omission* left mice still freezing at the end of the session and the next day. Exciting them at the same instant produced faster extinction and a stronger extinction memory. Both manipulations had two controls: light without the light-sensitive protein, and identical stimulation delivered between tones rather than at the omission. The mistimed animals behaved normally.

That last control is the entire finding. Dopamine here is not a general dial that makes fear better or worse. It is a signal at an instant, and moving it a few seconds destroys the effect. A renewal test ruled out the alternative that the manipulation had erased the original fear memory rather than accelerating new learning: fear returned in all groups, equally.

### The same machinery, with the sign reversed

There is a companion result in the appetitive literature that makes the mouse finding much harder to treat as a curiosity about fear.

Steinberg and colleagues trained rats on a cue that predicted sucrose, then withheld the sucrose. [^8] Omitting an expected *reward* is the opposite kind of surprise: it produces a negative prediction error, carried by a brief pause in dopamine firing rather than a burst. They filled that pause, activating dopamine neurons optogenetically at the moment the reward should have arrived. Extinction slowed. The animals kept responding to the cue, and were still doing it at a recall test the next day. The same temporal control applied - identical stimulation delivered between trials did nothing.

Read the two studies together and it is one mechanism rather than two. Expected shock omitted, dopamine bursts, remove the burst and extinction fails. Expected reward omitted, dopamine pauses, fill the pause and extinction fails. Both are the omission being registered as an error, both are causally necessary, and both work on a timescale of seconds.

That matters twice over. It means "dopamine teaches extinction" is not a special fact about fear but a property of error-correction learning in general, which is a firmer foundation for an argument about somebody's whole learning history. And it forces a precision I would otherwise have got wrong: what drives extinction is not more dopamine, it is a legible error signal, and the sign of that signal depends on whether the thing that failed to arrive was dreaded or wanted. In the aversive case the useful intervention is a burst; in the appetitive case it is a pause. Anyone reading this literature as "dopamine is good for extinction" has flattened the part that makes it work.

### The human signal exists, and it has a shape

This is where the proposal stops being about mice.

Kalisch's group - Kalisch is an author on the mouse paper - had already reported human imaging evidence of mesostriatal involvement in fear extinction. [^3] A later study using computational modelling found a prediction-error signal in the ventral striatum during human extinction learning, distributed more widely across striatal and frontal regions than expected. [^4]

Then, this year, the result that reorganised this proposal. Andres and colleagues applied latent class growth modelling to skin conductance data pooled from six datasets, **N = 448**, and found that human extinction is not one curve with noise around it. [^9] It is two populations. Roughly **76% are fast extinguishers**; roughly **24% are slow**. And in the imaging arm the difference was not the presence of the ventral striatal omission signal but its timing: fast extinguishers showed it early in extinction, where it can teach; slow extinguishers showed it only late.

Two things follow. First, there is an established, purely behavioural phenotyping method for extinction, with published base rates, that needs no scanner. Second, the thing that separates good from poor extinguishers in humans is *when* the signal arrives.

### The pharmacology is genuinely unsettled, and I have to say so

The obvious next move is to boost dopamine and watch extinction improve. The evidence for that is weaker than it looks, and this is the part of the literature I would most like to overstate.

In favour: L-DOPA during extinction was sufficient to initiate extinction learning in a mouse strain that otherwise could not extinguish. [^10] In humans, post-extinction L-DOPA was reported to enhance extinction memory retrieval via dopamine-dependent prefrontal reactivations. [^11]

Against: a preregistered replication of that human result, by largely the same group, **failed to replicate the L-DOPA effect**. [^12] Spontaneous ventromedial prefrontal reactivations still predicted retrieval; L-DOPA did not reliably produce them. The authors report a benefit in non-preregistered analyses conditioned on a marker of sympathetic tone, and flag it as needing further work. That is an honest negative result and it should be treated as one.

And the most recent animal work is worse for the simple story. Gunduz-Cinar and colleagues examined the omission signal in an extinction-deficient mouse strain. [^13] The deficient animals did not show a *weak* omission signal. They showed an **abnormally sustained** one, persisting through extinction training and retrieval, where the competent strain's signal declined. Optogenetic excitation of their dopamine neurons - at the cell bodies and at their infralimbic projections - **did not rescue extinction**.

So the deficit in the best available animal model of failed extinction is a failure of the signal to *resolve*, and adding more dopamine does not fix it. Anyone proposing that poor extinguishers simply need a bigger burst is arguing against the current evidence.

### What is actually known about dopamine in ADHD

Not "less". The literature describes dysregulation across timescales, which is a different claim and a more awkward one.

Tonic and phasic are timescales, not amounts. Tonic is the background extracellular concentration, set over minutes to hours by slow pacemaker firing and transporter reuptake. Phasic is a burst lasting a second or two, and it is the burst that carries the prediction error. [^14] Tonic can be high or low; phasic can be large or small; they are independent axes. The functional quantity is the contrast between them, because a burst has to be legible against its own background to be read downstream.

Volkow and colleagues found reduced dopamine transporter and D2/D3 receptor availability in the reward pathway in ADHD adults. [^15] Badgaiyan and colleagues report **attenuated tonic and enhanced phasic** release in ADHD - which is the opposite of what a naive "weak burst" account needs. [^16] Reinforcement-learning models of ADHD have been built explicitly on a phasic/tonic imbalance. [^17] And a meta-analysis of the fMRI literature finds blunted ventral striatal responsiveness during reward anticipation in ADHD. [^18]

One animal result points my way and I should cite it rather than leave the impression that the animal literature is silent. Brackney and colleagues tested extinction in spontaneously hypertensive rats, the most-used rodent model of ADHD, against controls, and found response bout length shortening across extinction in the controls and not in the model animals - which they read as slower updating of the response-outcome association. [^19] Two caveats travel with it: the extinction was appetitive rather than aversive, and the model has well-known limitations. It is nonetheless the closest existing evidence that an ADHD-like phenotype extinguishes abnormally.

I want to be exact about what that set of findings does to my hypothesis. It does not support it. Enhanced phasic release against a dim tonic background naively predicts a *more* legible teaching signal, not a less legible one. That is the single largest empirical problem here and I return to it below.

### The one study that has looked

Spencer and colleagues ran a two-day fear conditioning and extinction protocol in the scanner with **27 medication-naive, non-traumatised young adults with ADHD and 20 without**, recording skin conductance throughout. [^6]

The neural findings are striking and go my way. Compared with controls, the ADHD group showed greater insular activation during early extinction, **lesser dorsal anterior cingulate activation during late extinction**, **lesser ventromedial prefrontal activation during late extinction learning and during extinction recall**, and greater hippocampal activation at recall. The vmPFC and hippocampal deficits resembled those documented in PTSD.

Set beside the lesion work, that reads more sharply than the paper itself claims. Infralimbic cortex is the standard rodent homologue of human ventromedial prefrontal cortex, and infralimbic inactivation is the manipulation that produces an extinction-specific deficit with fear expression preserved. [^20] So the ADHD group showed reduced engagement of precisely the structure whose loss yields the behavioural profile I am predicting, along with altered hippocampal activity at recall in a structure whose inactivation also impairs extinction memory. That is not proof of anything. It is a set of findings landing where the account says they should.

The behavioural findings do not go my way, and this is the fact this proposal has to survive. Skin conductance was recorded as the conditioned-response measure, and the paper's findings are reported as abnormalities in fear *circuits*. A group difference in the extinction curve itself is not among them.

That is the closest thing to a keystone result that exists, and it says: the circuitry is atypical, the behaviour largely is not.

### Rejection sensitivity, which is the softest thing here

Rejection sensitivity dysphoria is not in the DSM-5-TR. It entered ADHD discussion through clinical observation rather than validation studies, and there is no validated measure of it.

What exists is thin and recent. A qualitative study of the lived experience of rejection sensitivity in ADHD adults was published this year. [^5] A scoping review of the same construct in autistic adults appeared alongside it and reaches the conclusion you would expect of a scoping review on a young construct. [^21] The general construct it sits next to is much better built: Downey and Feldman's rejection sensitivity model describes people who anxiously expect rejection, read it readily into ambiguous behaviour, and respond in ways that provoke the thing they fear. [^22]

And there is a well-established ADHD construct sitting directly on top of it. Emotion dysregulation in adults with ADHD is meta-analytically supported. [^23] Any finding I produce has to be shown not to be that finding wearing different clothes.

## The framing

The version of my hypothesis that survives contact with the evidence is narrower than the one I started with, and it is about timing rather than quantity.

> Extinction may fail not because the omission signal is absent but because it arrives too late to teach; and ADHD adults may be over-represented among the people in whom it arrives late.

Three things recommend this framing over "ADHD has a weak dopamine burst".

It matches both relevant findings about failed extinction. The human phenotype work found slow extinguishers differing in the *timing* of the striatal omission response, not its presence. [^9] The animal model of deficient extinction found a *sustained* omission signal rather than an absent one. [^13] Neither is an amplitude story.

It survives the ADHD dopamine literature instead of fighting it. Enhanced phasic release against attenuated tonic tone [^16] is a problem for "the burst is too small". It is not a problem for "the burst is mistimed or fails to resolve", because a signal can be large and still be delivered outside the window in which downstream targets can use it.

And it is measurable without a scanner, because Andres and colleagues established the phenotype from skin conductance alone. [^9]

It also predicts a specific asymmetry that distinguishes it from a general emotional-reactivity account: **acquisition normal, extinction slow**. Rejection sensitivity in ADHD is not described as a global excess of feeling. It is described as an inability to let a specific thing go. A generic dysregulation account predicts trouble everywhere. This one predicts trouble in one phase.

And that asymmetry is not only a clinical description. It is built into the circuit. Sierra-Mercado and colleagues inactivated each structure in turn during auditory fear conditioning and extinction in rats. [^20] Silencing infralimbic cortex left fear expression entirely intact while impairing both the within-session acquisition of extinction and extinction memory. Silencing prelimbic cortex did the reverse - fear expression impaired, extinction memory untouched. Inactivating the basolateral amygdala or the ventral hippocampus impaired both. A deficit confined to extinction, with acquisition and expression unaffected, is therefore the exact profile that taking one structure offline produces. I am predicting a dissociation the anatomy already supports, rather than one invented to fit a clinical picture.

## What this has to survive

Eight things stand between this idea and a defensible study. I would rather set them out myself than have a supervisor set them out for me, and the first is the one that matters most.

**Spencer's participants extinguished.** The only existing dataset in this area found atypical circuitry with, as reported, unremarkable conditioned responding. [^6] If the behaviour is intact in ADHD, my primary outcome is dead, and no amount of interesting neuroimaging rescues a proposal whose central claim is about learning rate. The sample was small and it was analysed for mean group differences rather than for latent classes, and a shift in phenotype membership is exactly the sort of effect a mean comparison in 47 people will miss. The deeper worry is that the mean may be the wrong statistic altogether. In the cognitive domain where ADHD has been studied most heavily, a meta-analysis of 319 studies found substantially elevated reaction time variability in ADHD and, once that variability was accounted for, no slowing of processing speed at all. [^24] If the signature of ADHD is inconsistency rather than decrement, a study hunting for a shallower average extinction curve may be hunting for the wrong shape. I should still be honest that this is me explaining away an inconvenient null, and that the correct posture is that the existing evidence points the other way from my hypothesis. What I can say without special pleading is that in the same participants the neural findings and the behavioural findings point in different directions, and that this literature contains no design capable of resolving which of them is right.

**The design may be asking a between-person question about a within-person phenomenon.** This is the objection that arrived last and I think it is the most serious structural one. Extinction memory is the context-dependent half of the pair: the fear memory generalises across contexts while the extinction memory does not, which is why renewal happens when an extinguished animal is tested somewhere new. [^25] Internal states can serve as contexts. And ADHD is a condition of fluctuating engagement and arousal - the variability finding above is one measure of it, and the delay and motivational accounts of ADHD are built on the same fluctuation. [^26] Put those together and safety learned in an engaged state might simply fail to retrieve in a disengaged one, in which case extinction in ADHD is not slow, it is intermittent and poorly transferred. That would sink this design rather than adjust it: a participant would be assigned to whichever latent class matched the state they happened to be in on testing day, and the between-group comparison would wash out - which is, inconveniently for me, also a tidy account of the existing null. I think it is a large enough alternative to deserve its own study rather than a paragraph here, and I have written it as one: [The Safety That Doesn't Travel](/proposals/safety-that-doesnt-travel.html).

I should be plain about what that does to this proposal. If the state account holds, the design set out below is the wrong instrument for the question, and the crossed design in the sibling proposal is where the money should go. What keeps this one on the list is that it is by far the cheaper of the two - one session against three, no state manipulation, no second physiological measure, and a sample size a student project can actually recruit - and that its evidence runs one way. A positive result here would have survived the state noise rather than depended on its absence. A null would settle nothing at all, and I would rather say so now than discover it in a discussion section.

**My mechanism changed shape to fit the data, and that is a real epistemic cost.** I began with "the burst is too weak". The evidence now says the failing signal is sustained rather than absent, so I have moved to "the burst is mistimed". That may be right, and I have given reasons above. It is also, plainly, a hypothesis that has been revised toward whatever survived. It should be prosecuted with the suspicion due to a claim that arrived after the results did.

**The ADHD dopamine literature still does not hand me the effect.** Attenuated tonic with enhanced phasic release [^16] is not obviously a recipe for degraded prediction-error learning; if anything, a dim background makes a burst more legible, not less. I have argued that timing is the parameter rather than contrast, but I cannot currently name the mechanism by which ADHD dopamine dynamics would delay the omission response specifically. That is a gap in the account, not a detail.

**The pharmacological route is not a settled tool.** The human L-DOPA effect failed a preregistered replication. [^12] Optogenetic dopamine excitation failed to rescue extinction in the deficient mouse strain. [^13] Any medication arm in this study is therefore exploratory, and I should not design a project whose interpretation depends on a manipulation with that track record.

**The construct at the far end may not be a construct.** Rejection sensitivity dysphoria has no validated measure and a thin evidence base. [^5][^21] If it reduces without remainder to emotion dysregulation in ADHD, which is well established, [^23] then a beautifully executed extinction study correlated against it is a study correlated against noise. The response is to measure both and require the extinction relationship to survive adjustment for the established construct - and to accept the answer if it does not.

**The domain leap is still a leap.** A foot shock has an offset. The mechanism is timed by the end of the tone, not by the shock, so what matters is whether the *expectancy* has a bounded window. Many social expectancies do not. Walk into a meeting expecting criticism that never comes and there is no instant at which the brain can compute "expected, absent, now". Some social events are bounded - the beat after a joke where the laugh does or does not come, the reply window on a message, the moment a presentation ends - and those are the right scale. But the clinical descriptions emphasise ambiguity as the thing that does the damage, and ambiguity is precisely the case with no offset. My account predicts that, which is convenient; it also means the laboratory version of this study, which supplies a crisp offset by design, is testing the mechanism under conditions the social world often does not provide.

**And the drugs are wrong.** Medications used clinically for rejection-sensitivity-type reactivity in ADHD frequently include guanfacine and clonidine, which are alpha-2 adrenergic agonists rather than dopaminergic. [^27] That does not sink a dopaminergic account, but a proposal that does not mention it is a proposal hoping nobody notices.

## The design that solves the hard problem

The hard problem is heterogeneity. ADHD samples are heterogeneous, extinction is heterogeneous, and a mean-difference design across two modest groups is how a real effect gets averaged into nothing - which may be part of what happened in the only existing study. [^6]

So do not run a mean-difference design.

Andres and colleagues have already established that human extinction sorts into two latent classes on skin conductance alone, with base rates of roughly 76% fast and 24% slow across 448 people. [^9] That converts my question from "is the ADHD extinction curve shallower on average?" into something better posed:

**Are ADHD adults over-represented in the slow-extinguisher class?**

That is a proportion test against a published base rate, on a phenotype defined by somebody else, using a method that does not require a scanner and cannot be accused of being tuned to my hypothesis. It is robust to the heterogeneity that would otherwise sink a mean comparison, and it fails cleanly. It is not free: the sample has to be powered on the size of the shift in class membership I am willing to call meaningful, and that number should be argued for and budgeted before recruitment rather than discovered at analysis.

Everything else in the design exists to make that comparison interpretable.

## What I would actually do

**Participants.** Adults with ADHD and matched controls, recruited through clinical services and community organisations rather than social media. Medication-naive participants where possible; otherwise a standardised washout, recorded and reported, because stimulants raise extracellular dopamine [^28] and an unrecorded medication state is an uncontrolled independent variable sitting on top of the mechanism of interest. Exclusion for trauma history and current PTSD, following Spencer's design, [^6] since the confound between ADHD and PTSD is the thing that makes this literature hard to read.

**Task.** A standard two-day differential conditioning protocol: acquisition with a reinforced and an unreinforced stimulus, extinction, extinction recall twenty-four hours later. Skin conductance as the primary conditioned response, US expectancy ratings alongside, following the consensus methodological guidance for human fear conditioning so the data can be pooled with existing datasets. [^29] Aversive stimulus calibrated per participant to "uncomfortable but not painful", with a non-shock variant available.

**Acquisition equivalence is a precondition, not an outcome.** If the groups differ during acquisition, the extinction comparison is uninterpretable and the study reports that instead.

**Measures.** A rejection sensitivity measure, [^22] an established emotion dysregulation measure, [^23] and ADHD symptom severity. The rejection sensitivity relationship has to survive adjustment for emotion dysregulation or it is not a finding about rejection sensitivity.

**Analysis.** Latent class growth modelling of the extinction-phase responses, class solution compared against the published base rates. [^9] Primary test: proportion of the ADHD group assigned to the slow class. Secondary: extinction slope as a continuous measure, extinction recall on day two, and the correlation between extinction rate and rejection sensitivity with emotion dysregulation entered first.

**Table 1**<br>
*Predicted Pattern Under Two Competing Accounts*

|| **Extinction-specific account** | **General dysregulation account** |
| --- | --- | --- |
| **Acquisition** | Equivalent to controls | Steeper, or equivalent |
| **Extinction rate** | Slower | Slower, but alongside acquisition differences |
| **Slow-class membership** | Over-represented | No specific prediction |
| **Extinction recall (day 2)** | Poorer | No specific prediction |
| **Correlation with rejection sensitivity** | Survives adjustment for emotion dysregulation | Disappears under adjustment |
{: .table}
*Note:* The two accounts are separated by the pattern rather than by any single result. A slower extinction curve on its own is consistent with both. What distinguishes them is whether the deficit is confined to the extinction phase, and whether the rejection sensitivity relationship is anything other than emotion dysregulation measured twice.

**Extensions, in the order I would add them if funded.** An imaging arm testing whether ADHD slow extinguishers show the *late* ventral striatal omission response Andres and colleagues describe, [^9] which is the only way to test the timing claim rather than infer it. Then a social version, replacing the shock with evaluative feedback and preserving a crisp offset - which would force the domain question into the open rather than leaving it in a caveat. A medication arm last, and framed as exploratory, given the replication record. [^12]

**My honest prediction.** Acquisition equivalent. A modest over-representation of the ADHD group in the slow class - large enough to be real, smaller than the story needs. A correlation with rejection sensitivity that attenuates substantially, though I hope not entirely, once emotion dysregulation is in the model. And a reasonable chance of a clean null on the behavioural measure, consistent with Spencer, which would mean the atypical circuitry in ADHD does not cash out as atypical learning at the resolution skin conductance can see.

That last outcome is not a failure of the study. It is the most likely single result, it is publishable, and it would close a question that is currently being answered confidently by people who have not asked it.

## Why this one is on the list

Exposure therapy is extinction. [^1] That is not a metaphor; it is the same process, and impaired extinction is documented across the anxiety disorders. [^30] If a subgroup of adults extinguishes slowly, and ADHD adults are over-represented in it, then the standard advice to expose more and wait is being given to people for whom the waiting is the problem. The clinical implication is not a new drug. It is scheduling: more trials, longer sessions, spaced differently, with the expectation of slower progress built into the treatment plan rather than read as non-compliance.

There is also a version of this finding that goes badly, and I would rather name it than let somebody else build it. "ADHD people cannot get over things" is one short step from a hiring filter, and a hiring filter is an exclusion mechanism with a citation attached. The same data supports "some people need a longer extinction schedule", which is an instruction to a clinician, and "some people are permanently unforgiving", which is a character description with a neuroimaging paper stapled to it. Identical evidence, opposite consequence. A study in this area should say which one it is for.

One more limit, stated plainly because a marker would otherwise assume I had missed it. Everything Salinas-Hernández and colleagues measured and manipulated was phasic. [^2] Their study says nothing about tonic state. Every claim I have made about background tone is an extension beyond their data rather than a reading of it, and the human work I lean on measures haemodynamic and autonomic proxies, not dopamine neurons. This proposal borrows a mechanism it cannot itself test and measures a behaviour it can. That is the honest description of it. [^b]

Then the small thing, which is the reason it is on the list at all.

A person who cannot stop replaying a rejection from nine years ago has usually been told they are dwelling, or holding a grudge, or too sensitive, or unable to move on. Every one of those is a description of character. If what is actually happening is that the update signal is arriving after the moment in which it could have taught anything, then it is not a character description. It is a learning rate, and a learning rate can be worked with.

I do not know that it is. That is why it is a proposal and not a claim.

<p align="center" class="asterism">&#x2042;</p>

---

[^1]: Craske, M. G., Hermans, D., & Vervliet, B. (2018). State-of-the-art and future directions for extinction as a translational model for fear and anxiety. *Philosophical Transactions of the Royal Society B: Biological Sciences*, *373*(1742), Article 20170025. [DOI: 10.1098/rstb.2017.0025](https://doi.org/10.1098/rstb.2017.0025)

[^2]: Salinas-Hernández, X. I., Vogel, P., Betz, S., Kalisch, R., Sigurdsson, T., & Duvarci, S. (2018). Dopamine neurons drive fear extinction learning by signaling the omission of expected aversive outcomes. *eLife*, *7*, Article e38818. [DOI: 10.7554/eLife.38818](https://doi.org/10.7554/eLife.38818)

[^3]: Raczka, K. A., Mechias, M.-L., Gartmann, N., Reif, A., Deckert, J., Pessiglione, M., & Kalisch, R. (2011). Empirical support for an involvement of the mesostriatal dopamine system in human fear extinction. *Translational Psychiatry*, *1*(6), Article e12. [DOI: 10.1038/tp.2011.10](https://doi.org/10.1038/tp.2011.10)

[^4]: Thiele, M., Yuen, K. S. L., Gerlicher, A. V. M., & Kalisch, R. (2021). A ventral striatal prediction error signal in human fear extinction learning. *NeuroImage*, *229*, Article 117709. [DOI: 10.1016/j.neuroimage.2020.117709](https://doi.org/10.1016/j.neuroimage.2020.117709)

[^5]: Rowney-Smith, A., Sutton, B., Quadt, L., & Eccles, J. A. (2026). The lived experience of rejection sensitivity in ADHD: A qualitative exploration. *PLOS ONE*, *21*(1), Article e0314669. [DOI: 10.1371/journal.pone.0314669](https://doi.org/10.1371/journal.pone.0314669)

[^6]: Spencer, A. E., Marin, M.-F., Milad, M. R., Spencer, T. J., Bogucki, O. E., Pope, A. L., Plasencia, N., Hughes, B., Pace-Schott, E. F., Fitzgerald, M., Uchida, M., & Biederman, J. (2017). Abnormal fear circuitry in Attention Deficit Hyperactivity Disorder: A controlled magnetic resonance imaging study. *Psychiatry Research: Neuroimaging*, *262*, 55–62. [DOI: 10.1016/j.pscychresns.2016.12.015](https://doi.org/10.1016/j.pscychresns.2016.12.015)

[^7]: Rescorla, R. A. (1988). Pavlovian conditioning: It's not what you think it is. *American Psychologist*, *43*(3), 151–160. [DOI: 10.1037/0003-066X.43.3.151](https://doi.org/10.1037/0003-066X.43.3.151)

[^8]: Steinberg, E. E., Keiflin, R., Boivin, J. R., Witten, I. B., Deisseroth, K., & Janak, P. H. (2013). A causal link between prediction errors, dopamine neurons and learning. *Nature Neuroscience*, *16*(7), 966–973. [DOI: 10.1038/nn.3413](https://doi.org/10.1038/nn.3413)

[^9]: Andres, E., Chuan-Peng, H., Gerlicher, A. M. V., Tüscher, O., & Kalisch, R. (2026). A ventral striatal learning signal reflecting individual differences in the success of fear extinction. *Molecular Psychiatry*, *31*(8), 4450–4462. [DOI: 10.1038/s41380-026-03565-9](https://doi.org/10.1038/s41380-026-03565-9)

[^10]: Whittle, N., Maurer, V., Murphy, C., Rainer, J., Bindreither, D., Hauschild, M., Scharinger, A., Oberhauser, M., Keil, T., Brehm, C., Valovka, T., Striessnig, J., & Singewald, N. (2016). Enhancing dopaminergic signaling and histone acetylation promotes long-term rescue of deficient fear extinction. *Translational Psychiatry*, *6*(12), Article e974. [DOI: 10.1038/tp.2016.231](https://doi.org/10.1038/tp.2016.231)

[^11]: Gerlicher, A. M. V., Tüscher, O., & Kalisch, R. (2018). Dopamine-dependent prefrontal reactivations explain long-term benefit of fear extinction. *Nature Communications*, *9*, Article 4294. [DOI: 10.1038/s41467-018-06785-y](https://doi.org/10.1038/s41467-018-06785-y)

[^12]: Andres, E., Chuan-Peng, H., Gerlicher, A. M. V., Meyer, B., Tüscher, O., & Kalisch, R. (2024). Replication study on the role of dopamine-dependent prefrontal reactivations in human extinction memory retrieval. *Nature Communications*, *15*, Article 2699. [DOI: 10.1038/s41467-024-46936-y](https://doi.org/10.1038/s41467-024-46936-y)

[^13]: Gunduz-Cinar, O., Fritz, E. M., Xia, M., Van Leer, E., Crow, N., Holmes, A., & Singewald, N. (2025). Altered dopamine signaling in extinction-deficient mice. *eNeuro*, *12*(11), Article ENEURO.0174-25.2025. [DOI: 10.1523/ENEURO.0174-25.2025](https://doi.org/10.1523/ENEURO.0174-25.2025)

[^14]: Grace, A. A. (1991). Phasic versus tonic dopamine release and the modulation of dopamine system responsivity: A hypothesis for the etiology of schizophrenia. *Neuroscience*, *41*(1), 1–24. [DOI: 10.1016/0306-4522(91)90196-U](https://doi.org/10.1016/0306-4522%2891%2990196-U)

[^15]: Volkow, N. D., Wang, G.-J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., Fowler, J. S., Zhu, W., Logan, J., Ma, Y., Pradhan, K., Wong, C., & Swanson, J. M. (2009). Evaluating dopamine reward pathway in ADHD: Clinical implications. *JAMA*, *302*(10), 1084–1091. [DOI: 10.1001/jama.2009.1308](https://doi.org/10.1001/jama.2009.1308)

[^16]: Badgaiyan, R. D., Sinha, S., Sajjad, M., & Wack, D. S. (2015). Attenuated tonic and enhanced phasic release of dopamine in attention deficit hyperactivity disorder. *PLOS ONE*, *10*(9), Article e0137326. [DOI: 10.1371/journal.pone.0137326](https://doi.org/10.1371/journal.pone.0137326)

[^17]: Véronneau-Veilleux, F., Robaey, P., Ursino, M., & Nekka, F. (2022). A mechanistic model of ADHD as resulting from dopamine phasic/tonic imbalance during reinforcement learning. *Frontiers in Computational Neuroscience*, *16*, Article 849323. [DOI: 10.3389/fncom.2022.849323](https://doi.org/10.3389/fncom.2022.849323)

[^18]: Plichta, M. M., & Scheres, A. (2014). Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature. *Neuroscience & Biobehavioral Reviews*, *38*(1), 125–134. [DOI: 10.1016/j.neubiorev.2013.07.012](https://doi.org/10.1016/j.neubiorev.2013.07.012)

[^19]: Brackney, R. J., Cheung, T. H. C., Herbst, K., Hill, J. C., & Sanabria, F. (2012). Extinction learning deficit in a rodent model of attention-deficit hyperactivity disorder. *Behavioral and Brain Functions*, *8*, Article 59. [DOI: 10.1186/1744-9081-8-59](https://doi.org/10.1186/1744-9081-8-59)

[^20]: Sierra-Mercado, D., Padilla-Coreano, N., & Quirk, G. J. (2011). Dissociable roles of prelimbic and infralimbic cortices, ventral hippocampus, and basolateral amygdala in the expression and extinction of conditioned fear. *Neuropsychopharmacology*, *36*(2), 529–538. [DOI: 10.1038/npp.2010.184](https://doi.org/10.1038/npp.2010.184)

[^21]: van Asselt, A., Reekers, D., & Roke, Y. (2026). Rejection sensitivity dysphoria in autistic adults: A scoping review. *Neurodiversity*, *4*. [DOI: 10.1177/27546330261441753](https://doi.org/10.1177/27546330261441753)

[^22]: Downey, G., & Feldman, S. I. (1996). Implications of rejection sensitivity for intimate relationships. *Journal of Personality and Social Psychology*, *70*(6), 1327–1343. [DOI: 10.1037/0022-3514.70.6.1327](https://doi.org/10.1037/0022-3514.70.6.1327)

[^23]: Beheshti, A., Chavanon, M.-L., & Christiansen, H. (2020). Emotion dysregulation in adults with attention deficit hyperactivity disorder: A meta-analysis. *BMC Psychiatry*, *20*(1), Article 120. [DOI: 10.1186/s12888-020-2442-7](https://doi.org/10.1186/s12888-020-2442-7)

[^24]: Kofler, M. J., Rapport, M. D., Sarver, D. E., Raiker, J. S., Orban, S. A., Friedman, L. M., & Kolomeyer, E. G. (2013). Reaction time variability in ADHD: A meta-analytic review of 319 studies. *Clinical Psychology Review*, *33*(6), 795–811. [DOI: 10.1016/j.cpr.2013.06.001](https://doi.org/10.1016/j.cpr.2013.06.001)

[^25]: Bouton, M. E. (2004). Context and behavioral processes in extinction. *Learning & Memory*, *11*(5), 485–494. [DOI: 10.1101/lm.78804](https://doi.org/10.1101/lm.78804)

[^26]: Sonuga-Barke, E. J. S. (2003). The dual pathway model of AD/HD: An elaboration of neuro-developmental characteristics. *Neuroscience & Biobehavioral Reviews*, *27*(7), 593–604. [DOI: 10.1016/j.neubiorev.2003.08.005](https://doi.org/10.1016/j.neubiorev.2003.08.005)

[^27]: Yu, S., Shen, S., & Tao, M. (2023). Guanfacine for the treatment of attention-deficit hyperactivity disorder: An updated systematic review and meta-analysis. *Journal of Child and Adolescent Psychopharmacology*, *33*(2), 40–50. [DOI: 10.1089/cap.2022.0038](https://doi.org/10.1089/cap.2022.0038)

[^28]: Volkow, N. D., Wang, G.-J., Fowler, J. S., Logan, J., Gerasimov, M., Maynard, L., Ding, Y.-S., Gatley, S. J., Gifford, A., & Franceschi, D. (2001). Therapeutic doses of oral methylphenidate significantly increase extracellular dopamine in the human brain. *The Journal of Neuroscience*, *21*(2), Article RC121. [DOI: 10.1523/JNEUROSCI.21-02-j0001.2001](https://doi.org/10.1523/JNEUROSCI.21-02-j0001.2001)

[^29]: Lonsdorf, T. B., Menz, M. M., Andreatta, M., Fullana, M. A., Golkar, A., Haaker, J., Heitland, I., Hermann, A., Kuhn, M., Kruse, O., Meir Drexler, S., Meulders, A., Nees, F., Pittig, A., Richter, J., Römer, S., Shiban, Y., Schmitz, A., Straube, B., … Merz, C. J. (2017). Don't fear 'fear conditioning': Methodological considerations for the design and analysis of studies on human fear acquisition, extinction, and return of fear. *Neuroscience & Biobehavioral Reviews*, *77*, 247–285. [DOI: 10.1016/j.neubiorev.2017.02.026](https://doi.org/10.1016/j.neubiorev.2017.02.026)

[^30]: Duits, P., Cath, D. C., Lissek, S., Hox, J. J., Hamm, A. O., Engelhard, I. M., van den Hout, M. A., & Baas, J. M. P. (2015). Updated meta-analysis of classical fear conditioning in the anxiety disorders. *Depression and Anxiety*, *32*(4), 239–253. [DOI: 10.1002/da.22353](https://doi.org/10.1002/da.22353)

[^a]: As of 3 September 2026 I have not found a study measuring fear extinction *learning rate* in an ADHD adult sample, nor any study relating extinction performance to rejection sensitivity in ADHD. Spencer and colleagues [^6] is the only study I can find that ran a fear conditioning and extinction protocol in ADHD adults at all, and it was designed and reported as a neuroimaging study of fear circuitry rather than as a study of learning rate. The two literatures this proposal joins - the dopaminergic mechanism of extinction, and rejection sensitivity in ADHD - have no overlapping papers that I can locate.

[^b]: The chain of inference here crosses two gaps that I want stated in one place rather than distributed through the argument. The first is species: the causal evidence for the omission signal is optogenetic and murine, [^2][^13] and the human evidence is correlational, haemodynamic, and about the ventral striatum rather than about dopamine neurons. [^3][^4][^9] The second is domain: everything measured is a laboratory aversive stimulus with a designed offset, and the phenomenon I am ultimately interested in is social and frequently has no offset at all. Neither gap is closed by this proposal. What the proposal does is test the behavioural prediction that follows if both gaps happen to be crossable, which is the only part of it I can actually pay for.
