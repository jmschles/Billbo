collection @payments
attributes :payer_id, :recipient_id, :amount
node(:date) do |p|
  p.created_at.to_i
end