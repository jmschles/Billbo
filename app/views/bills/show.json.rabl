object @bill
attributes :id, :user_id, :description, :amount
node(:date) do |b|
  b.created_at.to_i
end
child :billings do
  attributes :participant_id
  node(:participant_email) do |billing|
    User.find(billing.participant_id).email
  end
end