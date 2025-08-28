import React from 'react';
import { Badge } from '@/components/ui/badge';

const InvestmentPipeline = () => {
  const pipelineStages = [
    {
      title: "Sourcing",
      count: 8,
      color: "bg-blue-500/10 text-blue-600",
      deals: [
        { name: "TechFlow Solutions", industry: "SaaS", revenue: "$3.2M", stage: "Initial Review", priority: "high" },
        { name: "MedServe Australia", industry: "Healthcare", revenue: "$5.1M", stage: "NDA Signed", priority: "medium" },
        { name: "CloudOps Pro", industry: "Tech Services", revenue: "$2.8M", stage: "First Call", priority: "low" }
      ]
    },
    {
      title: "Due Diligence",
      count: 3,
      color: "bg-orange-500/10 text-orange-600",
      deals: [
        { name: "RetailTech Systems", industry: "Retail Tech", revenue: "$4.7M", stage: "Financial Review", priority: "high" },
        { name: "Aussie Logistics Co", industry: "Logistics", revenue: "$6.2M", stage: "Legal DD", priority: "high" }
      ]
    },
    {
      title: "Term Sheet",
      count: 1,
      color: "bg-purple-500/10 text-purple-600",
      deals: [
        { name: "DataCorp Analytics", industry: "Analytics", revenue: "$8.9M", stage: "Negotiations", priority: "high" }
      ]
    },
    {
      title: "Closing",
      count: 2,
      color: "bg-green-500/10 text-green-600",
      deals: [
        { name: "ServiceHub Pro", industry: "Professional Services", revenue: "$7.3M", stage: "Final Docs", priority: "high" },
        { name: "AgriTech Solutions", industry: "AgTech", revenue: "$4.1M", stage: "Completion", priority: "medium" }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-600';
      case 'medium': return 'bg-yellow-500/10 text-yellow-600';
      case 'low': return 'bg-gray-500/10 text-gray-600';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
      {pipelineStages.map((stage, stageIndex) => (
        <div key={stageIndex} className="flex flex-col">
          {/* Stage Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-foreground text-sm">{stage.title}</h4>
              <Badge variant="secondary" className={`text-xs ${stage.color}`}>
                {stage.count}
              </Badge>
            </div>
          </div>

          {/* Deal Cards */}
          <div className="space-y-3 flex-1 overflow-y-auto">
            {stage.deals.map((deal, dealIndex) => (
              <div key={dealIndex} className="bg-card border border-border rounded-lg p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-foreground text-sm leading-tight">{deal.name}</h5>
                  <Badge variant="outline" className={`text-xs ${getPriorityColor(deal.priority)}`}>
                    {deal.priority}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Industry</span>
                    <span className="text-foreground font-medium">{deal.industry}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Revenue</span>
                    <span className="text-foreground font-medium">{deal.revenue}</span>
                  </div>
                  
                  <div className="pt-1">
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {deal.stage}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add button for each column */}
            <button className="w-full border-2 border-dashed border-border rounded-lg p-3 text-muted-foreground hover:border-muted-foreground/50 hover:bg-muted/30 transition-colors text-sm">
              + Add Deal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentPipeline;
