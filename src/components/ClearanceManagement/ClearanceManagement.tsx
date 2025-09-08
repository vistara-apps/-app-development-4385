import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, Mail, DollarSign, Calendar } from 'lucide-react';
import { mockClearanceRequests, mockSamples } from '../../data/mockData';
import { ClearanceRequest, Sample } from '../../types';

const ClearanceManagement: React.FC = () => {
  const [requests] = useState<ClearanceRequest[]>(mockClearanceRequests);
  const [selectedRequest, setSelectedRequest] = useState<ClearanceRequest | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'denied': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'sent': return <Mail className="w-5 h-5 text-blue-400" />;
      case 'negotiating': return <DollarSign className="w-5 h-5 text-yellow-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-400/10';
      case 'denied': return 'text-red-400 bg-red-400/10';
      case 'sent': return 'text-blue-400 bg-blue-400/10';
      case 'negotiating': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getSampleDetails = (sampleId: string): Sample | undefined => {
    return mockSamples.find(sample => sample.sampleId === sampleId);
  };

  const handleCreateRequest = () => {
    alert('Opening clearance request form...');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dark-text mb-2">Clearance Management</h1>
          <p className="text-dark-text-secondary">Track and manage your sample clearance requests.</p>
        </div>
        <button onClick={handleCreateRequest} className="button-primary">
          New Request
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Requests List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card">
            <h3 className="text-lg font-semibold text-dark-text mb-4">Active Requests</h3>
            
            {requests.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-dark-text-secondary mx-auto mb-4" />
                <p className="text-dark-text-secondary">No clearance requests yet.</p>
                <button onClick={handleCreateRequest} className="button-primary mt-4">
                  Create Your First Request
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {requests.map((request) => {
                  const sample = getSampleDetails(request.sampleId);
                  return (
                    <div
                      key={request.requestId}
                      onClick={() => setSelectedRequest(request)}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedRequest?.requestId === request.requestId
                          ? 'border-purple-primary bg-purple-primary/5'
                          : 'border-dark-border hover:bg-dark-surface-2'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(request.requestStatus)}
                            <h4 className="font-semibold text-dark-text">
                              {sample?.originalTrackTitle || 'Unknown Track'}
                            </h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.requestStatus)}`}>
                              {request.requestStatus}
                            </span>
                          </div>
                          
                          <p className="text-dark-text-secondary text-sm mb-2">
                            {sample?.originalArtist || 'Unknown Artist'}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-dark-text-secondary">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Created: {new Date(request.createdAt).toLocaleDateString()}</span>
                            </div>
                            
                            {request.negotiatedFee && (
                              <div className="flex items-center space-x-1">
                                <DollarSign className="w-4 h-4" />
                                <span>${request.negotiatedFee.toLocaleString()}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Request Details */}
        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Request Details</h3>
          
          {selectedRequest ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-dark-text mb-2">Sample Information</h4>
                <div className="bg-dark-surface-2 rounded-lg p-3 space-y-2">
                  {(() => {
                    const sample = getSampleDetails(selectedRequest.sampleId);
                    return (
                      <>
                        <p className="text-sm">
                          <span className="text-dark-text-secondary">Track:</span>{' '}
                          <span className="text-dark-text">{sample?.originalTrackTitle}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-dark-text-secondary">Artist:</span>{' '}
                          <span className="text-dark-text">{sample?.originalArtist}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-dark-text-secondary">Rights Holder:</span>{' '}
                          <span className="text-dark-text">{sample?.rightsHolderInfo}</span>
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-dark-text mb-2">Contact Information</h4>
                <div className="bg-dark-surface-2 rounded-lg p-3">
                  <p className="text-sm">
                    <span className="text-dark-text-secondary">Email:</span>{' '}
                    <span className="text-dark-text">{selectedRequest.licensorContact}</span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-dark-text mb-2">Status Timeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-dark-text">Request Created</p>
                      <p className="text-xs text-dark-text-secondary">
                        {new Date(selectedRequest.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  {selectedRequest.requestStatus !== 'pending' && (
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div>
                        <p className="text-sm text-dark-text">Request Sent</p>
                        <p className="text-xs text-dark-text-secondary">
                          {new Date(selectedRequest.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {selectedRequest.licensorResponse && (
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div>
                        <p className="text-sm text-dark-text">Response Received</p>
                        <p className="text-xs text-dark-text-secondary">
                          {selectedRequest.licensorResponse}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedRequest.negotiatedFee && (
                <div>
                  <h4 className="font-medium text-dark-text mb-2">Negotiated Terms</h4>
                  <div className="bg-dark-surface-2 rounded-lg p-3 space-y-2">
                    <p className="text-sm">
                      <span className="text-dark-text-secondary">Fee:</span>{' '}
                      <span className="text-dark-text">${selectedRequest.negotiatedFee.toLocaleString()}</span>
                    </p>
                    {selectedRequest.agreementTerms && (
                      <p className="text-sm">
                        <span className="text-dark-text-secondary">Terms:</span>{' '}
                        <span className="text-dark-text">{selectedRequest.agreementTerms}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-4 space-y-2">
                <button className="w-full button-primary">
                  Update Status
                </button>
                <button className="w-full button-secondary">
                  Send Message
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-dark-text-secondary mx-auto mb-4" />
              <p className="text-dark-text-secondary">Select a request to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClearanceManagement;