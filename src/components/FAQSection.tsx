import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Varro Group different from other acquirers?",
      answer: "We're built by operators for operators. Ben's experience scaling three founder-led companies means he understands your challenges firsthand. We focus on long-term ownership, not quick flips, and bring operational expertise rather than just capital."
    },
    {
      question: "What size businesses do you typically acquire?",
      answer: "We target Australian businesses with $5M-$15M in revenue and $1M-$4M EBITDA. We're particularly interested in businesses with recurring revenue models and at least 10 years of current ownership."
    },
    {
      question: "How long does the acquisition process take?",
      answer: "Typically 3-6 months from initial conversation to completion, depending on the complexity of your business. We prioritize transparency and efficiency while ensuring thorough due diligence."
    },
    {
      question: "Do I need to stay involved after the acquisition?",
      answer: "That's entirely up to you and your goals. Some founders choose to stay on in leadership roles, others prefer to transition out gradually, and some step away immediately. We'll structure the deal to match your preferences."
    },
    {
      question: "Will you maintain our company culture and team?",
      answer: "Absolutely. We believe great businesses are built by great people. Preserving your culture and supporting your team is a core part of our approach. We have a 100% team retention rate across our portfolio."
    },
    {
      question: "How do you value businesses?",
      answer: "We use a comprehensive approach considering financials, market position, growth potential, and operational strength. Our valuations are fair and transparent, backed by thorough analysis and market comparables."
    },
    {
      question: "What happens if we don't proceed after initial discussions?",
      answer: "Nothing changes for you. All our initial conversations are confidential and obligation-free. We understand that timing and fit must be right for both parties."
    },
    {
      question: "Do you work with brokers?",
      answer: "We can work directly with business owners or through brokers. However, we don't charge broker commissions, which can often result in better outcomes for sellers."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Common questions about business acquisition
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are answers to the most common questions we receive from business owners considering a transition.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Reach out for a confidential conversation about your business and any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ben@varro.com.au?subject=Questions about business acquisition"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Ask a Question
              </a>
              <a 
                href="tel:0408-023-231"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;